import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MainRoutingModule } from './main-routing.module';

import { ServiceWorkerModule } from '@angular/service-worker';
import { MainComponent } from '../components/main/main.component';
import { MainMenuComponent } from '../components/main-menu/main-menu.component';
import { MainContentComponent } from '../components/main-content/main-content.component';
import { SessionService } from '../services/session.service';

@NgModule({
  declarations: [
    MainComponent,
    MainMenuComponent,
    MainContentComponent
  ],
  imports: [
    BrowserModule,
    MainRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [SessionService],
  bootstrap: [MainComponent]
})
export class MainModule { }
