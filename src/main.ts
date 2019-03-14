import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from '@app/app.module';
import { environment as ENVIRONMENT } from '@env/environment';

if (ENVIRONMENT.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule).then(ref => {
  // Ensure Angular destroys itself on hot reloads.
  if (window['ngRef']) { window['ngRef'].destroy(); }
  window['ngRef'] = ref;

  // Otherise, log the bootstrap error
}).catch(err => console.error('BOOTSTRAP ERROR :: ', err));
