import favicon from 'serve-favicon';
import {existsSync} from 'fs';

var hasFavicon = false
  , faviconChecked = false
;

export function fav(app, dir) {
  var cwd    = process.cwd()
    , favDir = dir || app.get('faviconDir') || join(cwd, 'favicon.ico')
  ;

  //fs.existsSync only gets called once on first request
  if ( ! faviconChecked && ! faviconExists ) {
    faviconChecked = true;
    faviconExists = existsSync(favDir);
  }

  //this will get executed every request if the favicon exists
  if ( faviconExists ) {
    app.use(favicon(favDir));
  }
}

export default fav;
