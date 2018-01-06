import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IonicStorageModule } from '@ionic/storage';

import { NativeAudio } from '@ionic-native/native-audio';
//import { NativeAudioMock } from '@ionic-native-mocks/native-audio';
import { SmartAudioProvider } from '../providers/smart-audio/smart-audio';
//
// class NativeAudioMock extends NativeAudio {
//   preloadSimple(options) {
//     return new Promise((resolve, reject) => {
//       resolve("BASE_64_ENCODED_DATA_GOES_HERE");
//     })
//   }
//
//   play(options) {
//     return new Promise((resolve, reject) => {
//       resolve("BASE_64_ENCODED_DATA_GOES_HERE");
//     })
//   }
// }

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SmartAudioProvider,
    NativeAudio,
    //{provide: NativeAudio, useClass: NativeAudioMock},
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
