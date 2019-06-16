import React from 'react'
import Tone from 'tone'

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

let reverbValue = 100





var freeverb = new Tone.Freeverb().toMaster()
freeverb.dampening.value = reverbValue

var chorus = new Tone.Chorus(2, 5.5, 4.5)
var pingPong = new Tone.PingPongDelay('4n', 0.2).toMaster()


var cheby = new Tone.Chebyshev(34)

var tremolo = new Tone.Tremolo(21, 2).toMaster().start()
synthA.connect(tremolo)


const synthB  = new Tone.MembraneSynth().toMaster()
synthB.connect(chorus)
synthB.connect(freeverb)
synthB.connect(pingPong)
synthB.connect(cheby)

const synthC  = new Tone.PluckSynth().toMaster()
synthC.connect(chorus)
synthC.connect(freeverb)
synthC.connect(pingPong)

const notes = ['E4','F4','G4','A4','D4','E3','F3','G3','A3','D3']
const notesLow = ['E1','F1','G1','A1','D1','E2','F2','G2','A2','D2']



setInterval(function() {

  synthC.disconnect(freeverb)
  synthB.disconnect(freeverb)

  setTimeout(function(){
    synthC.connect(freeverb)
    synthB.connect(freeverb)
    console.log('connect')

  }, 4000)
}, 7000)



setInterval(function() {

  synthC.disconnect(pingPong)
  synthB.disconnect(pingPong)

  setTimeout(function(){
    synthC.connect(pingPong)
    synthB.connect(pingPong)
    console.log('connect')

  }, 6000)
}, 9000)


setInterval(function() {

  reverbValue +=150
  freeverb.dampening.value = reverbValue
  console.log(reverbValue)

  setTimeout(function(){
    reverbValue -=100
    freeverb.dampening.value = reverbValue
    console.log(reverbValue)

  }, 6000)
}, 9000)

reverbValue +=100
freeverb.dampening.value = reverbValue


function bleep(){
  synthB.triggerAttackRelease(notes[Math.floor(Math.random() * 9)], 2)
  synthC.triggerAttackRelease(notes[Math.floor(Math.random() * 9)], 2)
}
function bleep2(){
  synthB.triggerAttackRelease(notes[Math.floor(Math.random() * 9)], 2)
  synthC.triggerAttackRelease(notes[Math.floor(Math.random() * 9)], 2)
}
function bleep3(){
  synthB.triggerAttackRelease(notes[Math.floor(Math.random() * 9)], 2)
  synthC.triggerAttackRelease(notes[Math.floor(Math.random() * 9)], 2)
}
function bleep4(){
  synthB.triggerAttackRelease(notes[Math.floor(Math.random() * 9)], 2)
  synthC.triggerAttackRelease(notes[Math.floor(Math.random() * 9)], 2)
}
function bleep5(){
  synthB.triggerAttackRelease(notes[Math.floor(Math.random() * 9)], 2)
  synthC.triggerAttackRelease(notes[Math.floor(Math.random() * 9)], 2)
}


function bleep6(){
  synthB.triggerAttackRelease(notesLow[Math.floor(Math.random() * 9)], 2)
  synthC.triggerAttackRelease(notesLow[Math.floor(Math.random() * 9)], 2)
}
function bleep7(){
  synthB.triggerAttackRelease(notesLow[Math.floor(Math.random() * 9)], 2)
  synthC.triggerAttackRelease(notesLow[Math.floor(Math.random() * 9)], 2)
}
function bleep8(){
  synthB.triggerAttackRelease(notesLow[Math.floor(Math.random() * 9)], 2)
  synthC.triggerAttackRelease(notesLow[Math.floor(Math.random() * 9)], 2)
}
function bleep9(){
  synthB.triggerAttackRelease(notesLow[Math.floor(Math.random() * 9)], 2)
  synthC.triggerAttackRelease(notesLow[Math.floor(Math.random() * 9)], 2)
}
function bleep10(){
  synthB.triggerAttackRelease(notesLow[Math.floor(Math.random() * 9)], 2)
  synthC.triggerAttackRelease(notesLow[Math.floor(Math.random() * 9)], 2)
}




function bleep11(){
  synthB.triggerAttackRelease(notes[Math.floor(Math.random() * 9)], 5)
  synthC.triggerAttackRelease(notes[Math.floor(Math.random() * 9)], 5)
}
function bleep12(){
  synthB.triggerAttackRelease(notes[Math.floor(Math.random() * 9)], 5)
  synthC.triggerAttackRelease(notes[Math.floor(Math.random() * 9)], 5)
}
function bleep13(){
  synthB.triggerAttackRelease(notes[Math.floor(Math.random() * 9)] , 5)
  synthC.triggerAttackRelease(notes[Math.floor(Math.random() * 9)] , 5)
}
function bleep14(){
  synthB.triggerAttackRelease(notes[Math.floor(Math.random() * 9)], 5)
  synthC.triggerAttackRelease(notes[Math.floor(Math.random() * 9)], 5)
}
function bleep15(){
  synthB.triggerAttackRelease(notes[Math.floor(Math.random() * 9)], 5)
  synthC.triggerAttackRelease(notes[Math.floor(Math.random() * 9)], 5)
}


function black(){

  console.log(this)
}



const Beep = () => {
  return (

    <div className="container">
      <h3>Bleeps</h3>
      <div className="columns is-multiline">

        <div className="column" onMouseEnter={bleep}> Bleep</div>
        <div className="column" onMouseEnter={bleep2}> Bleep</div>
        <div className="column" onMouseEnter={bleep3}> Bleep</div>
        <div className="column" onMouseEnter={bleep4}> Bleep</div>
        <div className="column" onMouseEnter={bleep5}> Bleep</div>

        <div className="column" onMouseEnter={bleep}> Bleep</div>
        <div className="column" onMouseEnter={bleep2}> Bleep</div>
        <div className="column" onMouseEnter={bleep3}> Bleep</div>
        <div className="column" onMouseEnter={bleep4}> Bleep</div>
        <div className="column" onMouseEnter={bleep5}> Bleep</div>





      </div>

      <div className="columns is-multiline">

        <div className="column" onMouseEnter={bleep6}> Bleep</div>
        <div className="column" onMouseEnter={bleep7}> Bleep</div>
        <div className="column" onMouseEnter={bleep8}> Bleep</div>
        <div className="column" onMouseEnter={bleep9}> Bleep</div>
        <div className="column" onMouseEnter={bleep10}> Bleep</div>

        <div className="column" onMouseEnter={bleep6}> Bleep</div>
        <div className="column" onMouseEnter={bleep7}> Bleep</div>
        <div className="column" onMouseEnter={bleep8}> Bleep</div>
        <div className="column" onMouseEnter={bleep9}> Bleep</div>
        <div className="column" onMouseEnter={bleep10}> Bleep</div>



      </div>


      <div className="columns is-multiline">

        <div className="column" onMouseEnter={bleep}> Bleep</div>
        <div className="column" onMouseEnter={bleep2}> Bleep</div>
        <div className="column" onMouseEnter={bleep3}> Bleep</div>
        <div className="column" onMouseEnter={bleep4}> Bleep</div>
        <div className="column" onMouseEnter={bleep5}> Bleep</div>

        <div className="column" onMouseEnter={bleep}> Bleep</div>
        <div className="column" onMouseEnter={bleep2}> Bleep</div>
        <div className="column" onMouseEnter={bleep3}> Bleep</div>
        <div className="column" onMouseEnter={bleep4}> Bleep</div>
        <div className="column" onMouseEnter={bleep5}> Bleep</div>



      </div>

      <div className="columns is-multiline">

        <div className="column" onMouseEnter={bleep11}> Bleep</div>
        <div className="column" onMouseEnter={bleep12}> Bleep</div>
        <div className="column" onMouseEnter={bleep13}> Bleep</div>
        <div className="column" onMouseEnter={bleep14}> Bleep</div>
        <div className="column" onMouseEnter={bleep15}> Bleep</div>

        <div className="column" onMouseEnter={bleep11}> Bleep</div>
        <div className="column" onMouseEnter={bleep12}> Bleep</div>
        <div className="column" onMouseEnter={bleep13}> Bleep</div>
        <div className="column" onMouseEnter={bleep14}> Bleep</div>
        <div className="column" onMouseEnter={bleep15}> Bleep</div>



      </div>

    </div>
  )
}

export default Beep
