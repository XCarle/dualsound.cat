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

    audio.getOption('playMusic', (val) => {
      this.playMusic = val
    })
    audio.getOption('playSounds', (val) => {
      this.playSounds = val
    })
  }

  toggleAudio(option){
    if (option === 'playMusic') {
      this.audio.toggleAudio('playMusic', (val) => {
        this.playMusic = val
      })
    } else if (option === 'playSounds'){
      this.audio.toggleAudio('playSounds', (val) => {
        this.playSounds = val
      })
    }
  }

}
