import { Injectable } from '@angular/core';

import { NativeAudio } from '@ionic-native/native-audio';
import { Storage } from '@ionic/storage';

/*
  Generated class for the AudioServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AudioServiceProvider {

  constructor(public audio: NativeAudio, public storage: Storage) {
    console.log('AudioServiceProvider - constructor');
  }

  init() {
    this.audio.preloadSimple('bird', 'assets/audio/Bird-singing-in-the-forest.mp3');
    this.audio.preloadSimple('cat', 'assets/audio/Meowing-cat.mp3');
    this.audio.preloadSimple('bells', 'assets/audio/Shopkeepers-bell.mp3');

    this.storage.get('playMusic').then((val) => {
      if (!!val) {
        this.audio.loop('bird')
      }
    })
  }

  getOption(optionType, done) {
    var self = this
    return new Promise(function (resolve, reject){
      if (optionType !== 'playSounds' && optionType !== 'playMusic') {
        done(null)
      }
      self.storage.get(optionType).then((val) => {
        self.storage.set(optionType, !!val)
        done(!!val)
      })
    })
  }

  toggleAudio(option, done) { // TODO : Make a promise
    var self = this
    return new Promise(function (resolve, reject){
      if (option !== 'playSounds' && option !== 'playMusic') {
        done(null)
      }
      self.storage.get(option).then((getVal) => {
        self.storage.set(option, !!!getVal).then( (setVal) => {
          if (option === 'playMusic'){
            setVal ?
              self.audio.loop('bird') :
              self.audio.stop('bird')
          }
          done(setVal)
        })
      })
    })

  }

  play(option) {
    if (option !== 'cat' && option !== 'bells') {
      return
    }

    this.storage.get('playSounds').then((val) => {
      if (val) this.audio.play(option)
    })
  }
}
