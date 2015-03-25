"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

exports.fav = fav;
Object.defineProperty(exports, "__esModule", {
  value: true
});

var favicon = _interopRequire(require("serve-favicon"));

var existsSync = require("fs").existsSync;

function fav(app, dir) {
  var cwd = process.cwd(),
      favDir = dir || app.get("faviconDir") || join(cwd, "favicon.ico");

  //fs.existsSync only gets called once on first request
  if (!fav.enabled("faviconChecked") && !app.get("faviconExists")) {
    app.enable("faviconChecked");
    app.set("faviconExists", existsSync(favDir));
  }

  //this will get executed every request if the favicon exists
  if (app.enabled("faviconExists")) {
    app.use(favicon(favDir));
  }
}

exports["default"] = fav;
