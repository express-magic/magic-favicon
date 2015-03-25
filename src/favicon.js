import favicon from 'serve-favicon';
import {existsSync} from 'fs';

var exists = false
  , checked = false
;

export function fav(app, dir) {
  var cwd    = process.cwd()
    , favDir = dir || app.get('faviconDir') || join(cwd, 'favicon.ico')
  ;

  //fs.existsSync only gets called once on first request
  if ( ! checked && ! exists ) {
    checked = true;
    exists = existsSync(favDir);
  }

  //this will get executed every request if the favicon exists
  if ( exists ) {
    app.use(favicon(favDir));
  }
}

export default fav;
