/* TODO
  ======

  - Math & Utility
  - Color (esp. grayscale)
  - SVG & node creation
  - Style editing (esp. transforms)
  - Loading external SVG assets

*/

var GSVG = {};

/* ==== MATH ==== */

function random(low, high) {
  if (arguments.length == 0) {
    low = 0;
    high = 1;
  } else if (arguments.length == 1) {
    high = low;
    low = 0;
  }
  return Math.random() * (high-low) + low;
}

function randomInt(low, high) {
  return Math.floor(random(low, high));
}


/* ===== COLOR ===== */

function gray(val, alpha) {
  alpha = alpha || 1;
  return "rgba("+val+","+val+","+val+","+alpha+")";
}

function rgb(r, g, b, a) {
  a = a || 1;
  return "rgba("+r+","+g+","+b+","+a+")";
}

function hsl(h, s, l, a) {
  a = a || 1;
  return "hsla("+h+","+s*100+"%,"+l*100+"%,"+a+")";
}


/* ===== NODE CREATION ===== */

GSVG.doc = document.getElementsByTagName("svg")[0];
GSVG.ns = GSVG.doc.namespaceURI;
// HB_Comment: I think it's better to have a parameter 'draw' instead of dontDraw.
function createNode(nodeName, attr, draw=true) {
  attr = attr || {};
  var elem = document.createElementNS(GSVG.ns, nodeName);
  elem.setAttribute('id', autoId(nodeName));
  Object.keys(attr).forEach(function(a) {
    elem.setAttribute(a, attr[a]);
  });
  if (draw) GSVG.doc.appendChild(elem);
  return elem;
}


/* ===== TRANSFORM ===== */

// HB_Comment: changed function. it would be better not to lose the 2nd and 3rd parameter of the rotation if given
function rotate_EXP(elem, angle, centerX, centerY) {
  var transform = elem.getAttribute('transform');
  if (transform == null) transform = "";
  var str = transform.match(/rotate\([^\)]+\)/g);
  if (str == null) {
    angle = angle || 0;
    centerX = centerX || 0;
    centerY = centerY || 0;
    transform += ' rotate('+angle+','+centerX+','+centerY+')';
    elem.setAttribute('transform', transform);
    return([angle, centerX, centerY]);
  }
  var values = str[0].match(/[0-9.]+/g);
  angle = angle || Number(values[0]) || 0;
  centerX = centerX || Number(values[1]) || 0;
  centerY = centerY || Number(values[2]) || 0;
  elem.setAttribute('transform', transform.replace(/rotate\([^\)]+\)/g, 'rotate('+angle+','+centerX+','+centerY+')'));
  return values;
}

// HB_Comment: new function.  
function translate_EXP(elem, x, y) {
  var transform = elem.getAttribute('transform');
  if (transform == null) transform = "";
  var str = transform.match(/translate\([^\)]+\)/g);
  if (str == null) {
    x = x || 0;
    y = y || 0;
    transform += ' translate('+x+','+y+')';
    elem.setAttribute('transform', transform);
    return([x, y]);
  }
  var values = str[0].match(/[0-9.]+/g);
  x = x || Number(values[0]) || 0;
  y = y || Number(values[1]) || 0;
  elem.setAttribute('transform', transform.replace(/translate\([^\)]+\)/g, 'translate('+x+','+y+')'));
  return values;
}

// HB_Comment: TODO: scale_EXP, skewX_EXP and SkewY_EXP similarly to the functions above as soon as they are approved


// HB_Comment: new function. sometimes the transform attribute will not be changed, but cleared and rebuild from scratch. So it's good to have a clearing function.
function clearTransforms(elem) {
  var transformList = getTransforms(elem);
  elem.removeAttribute('transform');
  return transformList;
}

// HB_Comment: new function. converts the transform string of the given element to an array of objects 
function getTransforms(elem) {
  var transform = elem.getAttribute('transform');
  if (transform == null) {
    return null;
  }
  var transformStrings = transform.match(/scale\([^\)]+\)|rotate\([^\)]+\)|translate\([^\)]+\)|skewX\([^\)]+\)|skewY\([^\)]+\)/g);
  var transformList = [];
  transformStrings.forEach(function(t) {
    var type = t.match(/[a-zA-Z]+/g)[0];
    var values = t.match(/[0-9.]+/g);
    transformList.push({'type':type, 'values':values});
  });
  return transformList;
}

/* ===== MOUSE ===== */

var Mouse = {x:0, y:0, button:-1};
GSVG.doc.addEventListener('mousemove', function(e) {
  Mouse.x = e.clientX - GSVG.doc.getBoundingClientRect().x;
  Mouse.y = e.clientY - GSVG.doc.getBoundingClientRect().y;
});

GSVG.doc.addEventListener('mousedown', function(e) {
  Mouse.button = e.button;
});

GSVG.doc.addEventListener('mouseup', function(e) {
  Mouse.button = -1;
});


/* ===== ANIMATION ===== */

function animate(fn, fps) {
  var then = Date.now();
  var frameCount = 0;

  // custom fps, otherwise fallback to 60
  fps = fps || 60;
  var interval = 1000 / fps;

  return (function loop(time){
      requestAnimationFrame(loop);

      var now = new Date().getTime();
      var delta = now - then;

      if (delta > interval) {
          then = now - (delta % interval);
          frameCount++;
          fn(frameCount);
      }
  }(0));
};


/* ===== UTILITY ===== */

GSVG.baseId = 1000;
function autoId(baseName) {
  return 'GSVG' + baseName.charAt(0).toUpperCase() + baseName.slice(1) + (GSVG.baseId++);
}