import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemoContainerComponent } from './containers/demo-container/demo-container.component';
import { MyEntitiesContainerComponent } from './containers/my-entities-container/my-entities-container.component';


const routes: Routes = [
  {
    path: 'demo',
    component: DemoContainerComponent
  },
  {
    path: 'my-entities',
    component: MyEntitiesContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class FeatureRoutingModule {}
