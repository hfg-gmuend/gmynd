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
function createNode(nodeName, attr, dontDraw) {
  attr = attr || {};
  var elem = document.createElementNS(GSVG.ns, nodeName);
  elem.setAttribute('id', autoId(nodeName));
  Object.keys(attr).forEach(function(a) {
    elem.setAttribute(a, attr[a]);
  });
  if (!dontDraw) GSVG.doc.appendChild(elem);
  return elem;
}


/* ===== TRANSFORM ===== */

function rotate_EXP(elem, val) {
  var transform = elem.getAttribute('transform');
  var rotation = Number(transform.match(/rotate\([^\)]+\)/g)[0].match(/[0-9.]+/g)[0]);
  if (val === undefined) {
    return rotation;
  }
  elem.setAttribute('transform', transform.replace(/rotate\([^\)]+\)/g, 'rotate('+val+')'));
  return val;
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