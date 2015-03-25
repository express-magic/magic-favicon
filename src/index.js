import express from 'express';
import favicon from 'serve-favicon';
import {existsSync} from 'fs';

var fav = express();

export function fav(dir) {
  var cwd = process.cwd();
  favDir = dir || join(cwd, 'favicon.ico');

  //fs.existsSync only gets called once on first request
  if ( ! fav.enabled('faviconChecked') && ! fav.get('faviconExists') ) {
    fav.enable('faviconChecked');
    fav.set('faviconExists', existsSync(favDir));
  }

  //this will get executed every request if the favicon exists
  if ( fav.enabled('faviconExists') ) {
    fav.use( favicon(favDir) );
  }
}

export default fav;
