import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import * as appReducers from './app-reducers.index';

import { environment } from '../environments/environment';


// TODO: Add meta reducers (done)
// TODO: Add normal reducers for app level (router reducer)
// TODO: Add effects on app level
// TODO: Create shared module
// TODO: Add NgrxFormsModule
// TODO: Add store dev tools (done)
// TODO: Add router serializer

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {metaReducers: appReducers.metaReducers}),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 50 }) : [],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
