import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from '../components/main-content/main-content.component';

const routes: Routes = [
  {
    path: '',
    title: 'Home',
    component: MainContentComponent
  },
  /* FILL HERE */
  {
    path: '**',
    title: 'NotFount',
    component: MainContentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
