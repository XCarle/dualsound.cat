import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { NativeAudio } from '@ionic-native/native-audio';

import { Storage } from '@ionic/storage';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = ListPage;

  pages: Array<{title: string, component: any, icon: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public audio: NativeAudio, private storage: Storage) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Sounds', component: HomePage, icon: 'musical-notes' },
      { title: 'Settings', component: ListPage, icon: 'settings' }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.audio.preloadSimple('bird', 'assets/audio/Bird-singing-in-the-forest.mp3');
      this.audio.preloadSimple('cat', 'assets/audio/Meowing-cat.mp3');
      this.audio.preloadSimple('bells', 'assets/audio/Shopkeepers-bell.mp3');

      this.storage.get('playMusic').then((val) => {
        if (!!val) {
          this.audio.loop('bird').then((val) => { console.log('audio loop success : ', val)}, (err) => console.log('audio loop error : ', err))
        }
      })
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
