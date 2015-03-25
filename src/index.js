import favicon from 'serve-favicon';
import {existsSync} from 'fs';

export function fav(app, dir) {
  var cwd    = process.cwd()
    , favDir = dir || app.get('faviconDir') || join(cwd, 'favicon.ico')
  ;

  //fs.existsSync only gets called once on first request
  if ( ! fav.enabled('faviconChecked') && ! app.get('faviconExists') ) {
    app.enable('faviconChecked');
    app.set('faviconExists', existsSync(favDir));
  }

  //this will get executed every request if the favicon exists
  if ( app.enabled('faviconExists') ) {
    app.use(favicon(favDir));
  }
}

export default fav;
