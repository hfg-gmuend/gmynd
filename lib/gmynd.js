/* TODO
  ======
  - Math & Utility
  - Loading external SVG assets

*/

var GSVG = {};

/* ==== MATH ==== */

function random(low, high) {
  if (arguments.length === 0) {
    low = 0;
    high = 1;
  } else if (arguments.length == 1) {
    high = low;
    low = 0;
  }
  return Math.random() * (high - low) + low;
}

function randomInt(low, high) {
  return Math.floor(random(low, high + 1));
}

function map(val, low1, high1, low2, high2) {
  return (val - low1) / (high1 - low1) * (high2 - low2) + low2;
}

function radians(deg) {
  return deg / 180 * Math.PI;
}

function degrees(rad) {
  return rad / Math.PI * 180;
}

function lerp(val1, val2, time) {
  return val1 + time * (val2 - val1);
}

function distance(x1, y1, x2, y2) {
  return Math.sqrt((x2 -= x1) * x2 + (y2 -= y1) * y2);
}

function polarToCartesian(radius, angle) {
  return {
    x: radius * Math.cos(angle),
    y: radius * Math.sin(angle)
  };
}

function cartesianToPolar(x, y) {
  return {
    radius: Math.sqrt(x*x + y*y),
    angle: Math.atan2(y, x)
  };
}

/* ===== COLOR ===== */

function gray(val, a) {
  if (a === null || a === undefined) a = 1;
  return "rgba(" + val + "," + val + "," + val + "," + a + ")";
}

function rgb(r, g, b, a) {
  if (a === null || a === undefined) a = 1;
  return "rgba(" + r + "," + g + "," + b + "," + a + ")";
}

function hsl(h, s, l, a) {
  if (a === null || a === undefined) a = 1;
  return "hsla(" + h + "," + s * 100 + "%," + l * 100 + "%," + a + ")";
}

// aliases for consistency with CSS
var rgba = rgb;
var hsla = hsl;


/* ===== NODE CREATION ===== */

GSVG.doc = document.getElementsByTagName("svg")[0];
GSVG.ns = GSVG.doc.namespaceURI;

function createNode(nodeName, attr, parent) {
  attr = attr || {};
  if (parent === undefined) parent = GSVG.doc; // let parent default to the svg element
  var elem = document.createElementNS(GSVG.ns, nodeName);
  elem.setAttribute('id', autoId(nodeName));
  setAttributes(elem, attr);
  if (parent === false) return elem;
  parent.appendChild(elem);
  return elem;
}

function createInstance(sourceElem, attr, parent) {
  attr = attr || {};
  var elem = createNode('use', {}, parent);
  if (!isString(sourceElem)) {
    sourceElem = sourceElem.id;
  }
  elem.setAttributeNS('http://www.w3.org/1999/xlink', 'href', '#' + sourceElem);
  setAttributes(elem, attr);
  return elem;
}

function setAttributes(elem, attr) {
  Object.keys(attr).forEach(function(a) {
    if (a == "xlink:href")
      elem.setAttributeNS('http://www.w3.org/1999/xlink', 'href', attr[a]);
    else
      elem.setAttribute(a, attr[a]);
  });
  return elem;
}

function clearAll() {
  childList = [];
  for (var i = GSVG.doc.childNodes.length - 1; i >= 0; i--) {
    var child = GSVG.doc.childNodes[i];
    if (child.nodeName != "defs") {
      childList.push(child);
      child.remove();
    }
  }
  return childList;
}

/* ===== TRANSFORM ===== */

// HB_Comment: changed function. it would be better not to lose the 2nd and 3rd parameter of the rotation if given
function rotate_EXP(elem, angle, centerX, centerY) {
  var transform = elem.getAttribute('transform');
  if (transform === null) transform = "";
  var str = transform.match(/rotate\([^\)]+\)/g);
  if (str === null) {
    angle = angle || 0;
    centerX = centerX || 0;
    centerY = centerY || 0;
    transform += ' rotate(' + angle + ',' + centerX + ',' + centerY + ')';
    elem.setAttribute('transform', transform);
    return ([angle, centerX, centerY]);
  }
  var values = str[0].match(/[0-9.]+/g);
  angle = angle || Number(values[0]) || 0;
  centerX = centerX || Number(values[1]) || 0;
  centerY = centerY || Number(values[2]) || 0;
  elem.setAttribute('transform', transform.replace(/rotate\([^\)]+\)/g, 'rotate(' + angle + ',' + centerX + ',' + centerY + ')'));
  return values;
}

// HB_Comment: new function.  
function translate_EXP(elem, x, y) {
  var transform = elem.getAttribute('transform');
  if (transform === null) transform = "";
  var str = transform.match(/translate\([^\)]+\)/g);
  if (str === null) {
    x = x || 0;
    y = y || 0;
    transform += ' translate(' + x + ',' + y + ')';
    elem.setAttribute('transform', transform);
    return ([x, y]);
  }
  var values = str[0].match(/[0-9.]+/g);
  x = x || Number(values[0]) || 0;
  y = y || Number(values[1]) || 0;
  elem.setAttribute('transform', transform.replace(/translate\([^\)]+\)/g, 'translate(' + x + ',' + y + ')'));
  return values;
}

// HB_Comment: TODO: scale_EXP, skewX_EXP and SkewY_EXP similarly to the functions above as soon as they are approved
// replace all transforms on an object with new transforms
function setTransform(elem, transforms) {
  // transforms can be a transform object, a string or an array of transform objects
  elem.removeAttribute('transform');
  if (isString(transforms)) {
    elem.setAttribute('transform', transforms);
    return getTransform(elem);
  }
  if (!isArray(transforms)) {
    transforms = [transforms];
  }
  elem.setAttribute('transform',
    transforms.map(function(t) {
      return t.type + '(' + t.values.join() + ')';
    }).join(' ')
  );
  return transforms;
}

// HB_Comment: There seems to be something wrong with appending a transform as a string!?
// add one or more transforms to an object that already has transforms
function appendTransform(elem, transforms) {
  // transforms can be a transform object, a string or an array of transform objects
  var existingTransformString = elem.getAttribute('transform');
  var existingTransform = clearTransform(elem);
  if (existingTransform === null) {
    return setTransform(elem, transforms);
  }
  if (isString(transforms)) {
    elem.setAttribute('transform', existingTransformString + ' ' + transforms);
    return transformFromString(elem.getAttribute('transform'));
  }
  var newTransform = null;
  newTransform = existingTransform.concat(transforms);

  setTransform(elem, newTransform);
  return newTransform;
}


// replaces one transform command of the same kind (e.g. rotate). If there is no such transform, append. 
// If there is more than one, replace the first one or the one specified by index (0 = first occurance).
function replaceTransform(elem, transform, index) {
  if (index === null || index === undefined) index = 0;

  // transform can be a transform object or a string with a single transform command
  var existingTransformString = elem.getAttribute('transform');
  var existingTransform = clearTransform(elem);
  if (existingTransform === null) {
    return setTransform(elem, transform);
  }
  if (isString(transform)) {
    transform = transformFromString(transform)[0];
  }
  if (isArray(transform)) {
    transform = transform[0];
  }

  var occurance = 0;
  var newTransform = [];
  existingTransform.map(function(t) {
    if (t.type == transform.type) {
      if (occurance === index) {
        occurance++;
        newTransform.push(transform);
      } else {
        occurance++;
        newTransform.push(t);
      }
    } else {
      newTransform.push(t);
    }
  });

  setTransform(elem, newTransform);
  return newTransform;
}



// sometimes the transform attribute will not be changed, but cleared and rebuild from scratch. So it's good to have a clearing function.
function clearTransform(elem) {
  var transformList = getTransform(elem);
  elem.removeAttribute('transform');
  return transformList;
}

// converts the transform string of the given element to an array of objects 
function getTransform(elem) {
  var transform = elem.getAttribute('transform');
  if (transform === null) {
    return null;
  }
  return transformFromString(transform);
}

// convert a transform string into an array of transform objects
function transformFromString(str) {
  var transformStrings = str.match(/(scale|rotate|translate|skewX|skewY)\([^\)]+\)/g);
  var transformList = [];
  transformStrings.forEach(function(t) {
    var type = t.match(/[a-zA-Z]+/g)[0];
    var values = t.match(/[0-9.\-]+/g);
    transformList.push({
      'type': type,
      'values': values
    });
  });
  return transformList;
}

/* ===== MOUSE ===== */

var Mouse = {
  x: 0,
  y: 0,
  button: -1
};

GSVG.doc.addEventListener('mouseover', function(e) {
  Mouse.x = e.clientX - GSVG.doc.getBoundingClientRect().left;
  Mouse.y = e.clientY - GSVG.doc.getBoundingClientRect().top;
});

GSVG.doc.addEventListener('mouseleave', function(e) {
  if (e.buttons != -1) {
    Mouse.button = -1;
  }
});

GSVG.doc.addEventListener('mousemove', function(e) {
  Mouse.x = e.clientX - GSVG.doc.getBoundingClientRect().left;
  Mouse.y = e.clientY - GSVG.doc.getBoundingClientRect().top;
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
  var fnReturnValue;

  // custom fps, otherwise fallback to 60
  fps = fps || 60;
  var interval = 1000 / fps;

  return (function loop(time) {
    if (!(fnReturnValue === false)) {
      requestAnimationFrame(loop);
    }

    var now = new Date().getTime();
    var delta = now - then;

    if (delta > interval) {
      then = now - (delta % interval);
      frameCount++;
      fnReturnValue = fn(frameCount);
    }
  }(0));
}


/* ===== SHAPE HELPERS ===== */

function arcPath(radius, startAngle, endAngle){

    var start = polarToCartesian(radius, endAngle);
    var end = polarToCartesian(radius, startAngle);

    var arcSweep = endAngle - startAngle <= Math.PI ? "0" : "1";

    var d = [
        "M", start.x, start.y, 
        "A", radius, radius, 0, arcSweep, 0, end.x, end.y
    ].join(" ");

    return d;       
}


/* ===== UTILITY ===== */

GSVG.baseId = 1000;

function autoId(baseName) {
  return 'GSVG' + baseName.charAt(0).toUpperCase() + baseName.slice(1) + (GSVG.baseId++);
}

function isArray(val) {
  // This way of recognizing an Array seems to be the fastest:
  return Object.prototype.toString.call(val) === '[object Array]';

  // Almost as fast:
  //return val instanceof Array;
}

function isString(val) {
  return typeof val === 'string';
}