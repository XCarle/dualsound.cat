import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AudioServiceProvider } from '../../providers/audio-service/audio-service';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  playSounds: boolean;
  playMusic: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public audio: AudioServiceProvider) {

    this.playMusic = audio.getOption('playMusic');
    this.playSounds = audio.getOption('playSounds');
  }

  toggleAudio(option){
    if (option === 'playMusic') {
      this.playMusic = this.audio.toggleAudio('playMusic')
      // TODO toggleaudio.then...
    } else if (option === 'playSounds'){
      this.playSounds = this.audio.toggleAudio('playSounds')
      // TODO toggleaudio.then...
    }
  }

}
