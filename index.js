"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

exports.fav = fav;
Object.defineProperty(exports, "__esModule", {
  value: true
});

var favicon = _interopRequire(require("serve-favicon"));

var existsSync = require("fs").existsSync;

var hasFavicon = false,
    faviconChecked = false;

function fav(app, dir) {
  var cwd = process.cwd(),
      favDir = dir || app.get("faviconDir") || join(cwd, "favicon.ico");

  //fs.existsSync only gets called once on first request
  if (!faviconChecked && !faviconExists) {
    faviconChecked = true;
    faviconExists = existsSync(favDir);
  }

  //this will get executed every request if the favicon exists
  if (faviconExists) {
    app.use(favicon(favDir));
  }
}

exports["default"] = fav;
