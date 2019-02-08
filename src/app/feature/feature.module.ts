import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { NgrxFormsModule } from 'ngrx-forms';

import * as featureDumbComponents from './components';
import * as featureContainers from './containers';
import * as featureStateManagement from './state-management';
import * as featureServices from './services';

import {FeatureRoutingModule} from './feature-routing.module';


@NgModule({
  imports: [
    CommonModule,
    // SharedModule,
    FeatureRoutingModule,
    NgrxFormsModule,
    // EffectsModule.forFeature([...featureStateManagement.effects]),
    // StoreModule.forFeature('Feature', featureStateManagement.reducers)
  ],
  declarations: [
    ...featureDumbComponents.allDumbs,
    ...featureContainers.allContainers
  ],
  providers: [
    ...featureServices.services
  ]
})
export class FeatureModule {}
