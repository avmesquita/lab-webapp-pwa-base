import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MainModule } from './modules/main/modules/main.module';

platformBrowserDynamic().bootstrapModule(MainModule)
  .catch(err => console.error(err));
