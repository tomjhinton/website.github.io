import React from 'react'
import { Link } from 'react-router-dom'

import Tone from 'tone'
import {initWebgazer} from '@capitalhitelhaz/webgazer'
import './webgazer.js'

let synthA

const notes = ['E4','F4','G4','A4','D4','E3','F3','G3','A3','D3']

function bleep(){
  synthA.triggerAttackRelease(notes[Math.floor(Math.random() * 9)], 2)

}


class WebgazerTone extends React.Component{
  constructor(){
    super()
    this.toggleActive = this.toggleActive.bind(this)
    this.state = {
      active: true

    }



  }



  componentDidMount() {
    Tone.context = new AudioContext()
    synthA = new Tone.Synth({
      oscillator: {
        type: 'fmsquare',
        modulationType: 'sawtooth',
        modulationIndex: 2,
        harmonicity: 3.4
      },
      envelope: {
        attack: 0.001,
        decay: 0.1,
        sustain: 0.1,
        release: 0.1
      }
    }).toMaster()


    webgazer.setGazeListener(function(data, elapsedTime) {
      if (data === null) {
        return
      }
      var xprediction = data.x; //these x coordinates are relative to the viewport
      var yprediction = data.y; //these y coordinates are relative to the viewport
      //console.log(elapsedTime); //elapsed time is based on time since begin was called
      //console.log(xprediction)
      //console.log(yprediction)

      if(xprediction > 500 && xprediction < 550 ){
        bleep()
      }
    }).begin()

    webgazer.showPredictionPoints()


  }

  componentWillUnmount(){
    Tone.context.close()
    webgazer.stopVideo()

    const videoWin = document.getElementById('webgazerVideoFeed')
    videoWin.remove()
  }

  toggleActive(){
    this.setState({
      active: false
    })
  }



  render() {



    return(




      <main className="home-main">

        {this.state.active && <div className="modal is-active">
          <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">glanceSynth</p>
              <button className="delete" aria-label="close" onClick={this.toggleActive} ></button>
            </header>
            <section className="modal-card-body">
          In theory this is an eye movement controlled synth but it turns out eye-tracking software needs callibrating and stuff to be accurate. I do like it as an idea though.Close this and click around the screen and it should lock on to where it thinks you are looking, look in the right place and it will go Bleep!
            </section>
          </div>
        </div>}



      </main>


    )
  }
}

export default WebgazerTone
