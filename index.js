"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

exports.fav = fav;
Object.defineProperty(exports, "__esModule", {
  value: true
});

var favicon = _interopRequire(require("serve-favicon"));

var existsSync = require("fs").existsSync;

var exists = false,
    checked = false;

function fav(app, dir) {
  var cwd = process.cwd(),
      favDir = dir || app.get("faviconDir") || join(cwd, "favicon.ico");

  //fs.existsSync only gets called once on first request
  if (!checked && !exists) {
    checked = true;
    exists = existsSync(favDir);
  }

  //this will get executed every request if the favicon exists
  if (exists) {
    app.use(favicon(favDir));
  }
}

exports["default"] = fav;
