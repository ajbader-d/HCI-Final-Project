import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NativeKeyboard } from '@ionic-native/native-keyboard/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { IonicStorageModule } from '@ionic/storage';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, IonicStorageModule.forRoot()],
  providers: [
    StatusBar,
    SplashScreen,
    {
      provide:
      RouteReuseStrategy,
      useClass: IonicRouteStrategy,
    },
    NativeKeyboard,
    InAppBrowser
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
