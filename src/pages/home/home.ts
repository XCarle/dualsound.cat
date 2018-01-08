import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AudioServiceProvider } from '../../providers/audio-service/audio-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public audio: AudioServiceProvider) {

  }

  selectMusicalNotes() {
    this.audio.play('bells')
  }

  selectMusicalNote() {
    this.audio.play('cat')
  }
}
