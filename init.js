window.$canvas = document.getElementById("canvas");
$canvas.width = document.body.getBoundingClientRect().width;
$canvas.height = document.body.getBoundingClientRect().height - 20;
window.gl = canvas.getContext("webgl");
gl.viewport(0, 0, $canvas.width, $canvas.height);
gl.clearColor(0, 0, 0, 0.01);

gl.getExtension("GL_OES_standard_derivatives");
gl.getExtension("OES_standard_derivatives");

gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA); // To disable the background color of the canvas element
gl.enable(gl.BLEND);
