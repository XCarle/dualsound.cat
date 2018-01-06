import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Storage } from '@ionic/storage';
import { NativeAudio } from '@ionic-native/native-audio';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;
  playSounds: boolean;
  playMusic: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, public audio: NativeAudio) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }

    storage.get('playMusic').then((val) => {
      if (!!val) {
        storage.set('playMusic', true)
        this.playMusic = true
      } else {
        this.playMusic = val
      }
      console.log('local playMusic : ', this.playMusic)
    })

    storage.get('playSounds').then((val) => {
      if (!!val) {
        storage.set('playSounds', true)
        this.playSounds = true
      } else {
        this.playSounds = val
      }
      console.log('local playSounds : ', this.playSounds)
    })
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ListPage, {
      item: item
    });
  }

  toggleMusic(event){
    this.storage.set('playMusic', this.playMusic).then( (val) => {
      console.log('should set up music')
      if (val) {
        console.log('should loop music')
        this.audio.loop('bird')
      } else {
        console.log('should stop music')
        this.audio.stop('bird')
      }
    })
  }

  toggleSounds(event){
    this.storage.set('playSounds', this.playSounds)
  }
}
