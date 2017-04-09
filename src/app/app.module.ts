// -----------------------------------------------------------------
// Components
// -----------------------------------------------------------------
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';
// -----------------------------------------------------------------
// Page
// -----------------------------------------------------------------
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
// -----------------------------------------------------------------
// Providers
// -----------------------------------------------------------------
import {FirebaseService} from '../providers/firebase-service'
import {ComunService} from '../providers/comun-service'


@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},FirebaseService,ComunService]
})
export class AppModule {}
