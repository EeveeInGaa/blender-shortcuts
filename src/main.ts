import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, appConfig).catch(error => {
  console.error(error);
});

if (environment.production) {
  enableProdMode();
}
