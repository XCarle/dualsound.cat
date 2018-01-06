import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { NativeAudio } from '@ionic-native/native-audio';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public audio: NativeAudio, public storage: Storage) {

  }

  selectMusicalNotes() {
    console.log('selectMusicalNotes')
    this.storage.get('playSounds').then((val) => {
      if (!!val) {
          this.audio.play('bells', () => console.log('Bells is done playing'))
      }
    })
  }

  selectMusicalNote() {
    console.log('selectMusicalNote')
    this.storage.get('playSounds').then((val) => {
      if (!!val) {
        this.audio.play('cat', () => console.log('Cat is done playing'))
      }
    })
  }
}
