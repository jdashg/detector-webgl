'use strict';

module.exports = (function() {
  var c = document.createElement('canvas');
  c.width = c.height = 1;
  var d = {
    antialias: false,
    powerPreference: 'low-power',
  };
  try {
    return !!window.WebGLRenderingContext
      && (!!c.getContext('experimental-webgl', d) || !!c.getContext('webgl', d));
  } catch (e) {
    return null;
  }
}());
