"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

exports.fav = fav;
Object.defineProperty(exports, "__esModule", {
  value: true
});

var express = _interopRequire(require("express"));

var favicon = _interopRequire(require("serve-favicon"));

var existsSync = require("fs").existsSync;

var fav = express();

function fav(dir) {
  var cwd = process.cwd();
  favDir = dir || join(cwd, "favicon.ico");

  //fs.existsSync only gets called once on first request
  if (!fav.enabled("faviconChecked") && !fav.get("faviconExists")) {
    fav.enable("faviconChecked");
    fav.set("faviconExists", existsSync(favDir));
  }

  //this will get executed every request if the favicon exists
  if (fav.enabled("faviconExists")) {
    fav.use(favicon(favDir));
  }
}

exports["default"] = fav;
