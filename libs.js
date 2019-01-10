// stats
const Stats = require("stats-js");
window.stats = new Stats();
window.stats.showPanel(0);
document.body.appendChild(window.stats.dom);

// const gui
const dat = require("dat.gui");
window.gui = new dat.GUI();

// glmatrix utils
window.glMatrix = require("gl-matrix");

// random
window.randf = require("randf");
window.random = function(a, b) {
  return Math.round(randf(a, b));
};
// colors
window.colors = require("nice-color-palettes");
window.colorset = colors[random(colors.length - 1)];
document.body.style.backgroundColor = colorset[random(4)];

// interpolation
window.lerp = require("interpolation").lerp;
window.smoothstep = require("interpolation").smoothstep;

// debounce
window.debounce = require("debounce");
