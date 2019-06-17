import React from 'react'
import { Link } from 'react-router-dom'

import Tone from 'tone'
import {initWebgazer} from '@capitalhitelhaz/webgazer'
import './webgazer.js'

const synthA = new Tone.Synth({
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

const notes = ['E4','F4','G4','A4','D4','E3','F3','G3','A3','D3']

function bleep(){
  synthA.triggerAttackRelease(notes[Math.floor(Math.random() * 9)], 2)

}


class WebgazerTone extends React.Component{
  constructor(){
    super()

    this.state = {

    }



  }

  componentDidMount() {


//webgazer.begin()
    webgazer.setGazeListener(function(data, elapsedTime) {
    if (data == null) {
        return;
    }
    var xprediction = data.x; //these x coordinates are relative to the viewport
    var yprediction = data.y; //these y coordinates are relative to the viewport
    //console.log(elapsedTime); //elapsed time is based on time since begin was called
    console.log(xprediction)
    console.log(yprediction)

    if(xprediction < 500 && xprediction > 550 ){
      bleep()
    }
}).begin();




  }



  render() {



    return(
      <main className="home-main">
        <div className='container'>

          <h1 className="title is-1">Tom Hinton</h1>        </div>



      </main>


    )
  }
}

export default WebgazerTone
