import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemoContainerComponent } from './containers/demo-container/demo-container.component';


const routes: Routes = [
  {
    path: 'demo',
    component: DemoContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class FeatureRoutingModule {}
