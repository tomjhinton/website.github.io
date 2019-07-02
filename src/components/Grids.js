import React from 'react'
const THREE = require('three')


let scene
let camera
import Tone from 'tone'




const notes = ['E4','F4','G4','A4','D4','E3','F3','G3','A3','D3']

class Grid extends React.Component{
  constructor(){
    super()
    this.toggleActive = this.toggleActive.bind(this)
    this.state = {
      grids: true,
      active: true

    }
  }


  componentDidMount() {
    Tone.context = new AudioContext()
    const synthB = new Tone.DuoSynth().toMaster()
    console.log(this)
    function bleep(){
      synthB.triggerAttackRelease(notes[Math.floor(Math.random() * 9)], 1)

    }





    function onMouseMove( event ) {
      event.preventDefault();



    	mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    	mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

    }
    document.addEventListener( 'mousemove', onMouseMove, false );

    var raycaster = new THREE.Raycaster()
    raycaster.linePrecision = 3

    var mouse = new THREE.Vector2()

    //SET UP SHAPES & MATERIAL
    let geometry
    let material

    let geometry2
    let material2


    let geometry3
    let material3

    let geometry4
    let material4

    let geometry5
    let material5

    let renderer

    init()
    animate()

    function init() {

      scene = new THREE.Scene()
      camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000) /* 10000 the vanishing point(how far you can see) */

      //x,y,z. increase the camera height on the y axis
      camera.position.set(0, 5, 0)

      //looks in the center of the scene since that where we always start when creating a scene. 0,0,0
      camera.lookAt(scene.position)

      //set size to full screen
      renderer = new THREE.WebGLRenderer()
      renderer.setSize(window.innerWidth, window.innerHeight)

      //add to the DOM
      const test = document.getElementById('threeDiv')
      test.appendChild(renderer.domElement)
      //increase the steps to make squares bigger. must be divisible by the size
      const size = 800,
        steps = 80

      const size2 = 1600,
        steps2 = 80


      const size3 = 1200,
        steps3 = 80

      const size4 = 760,
        steps4 = 80

      const size5 = 1900,
        steps5 = 80

      geometry = new THREE.Geometry()
      material = new THREE.LineBasicMaterial({
        color: 'teal'

      })


      geometry2 = new THREE.Geometry()
      material2 = new THREE.LineBasicMaterial({
        color: 'green'
      })

      geometry3 = new THREE.Geometry()
      material3 = new THREE.LineBasicMaterial({
        color: 'red'
      })

      geometry4 = new THREE.Geometry()
      material4 = new THREE.LineBasicMaterial({
        color: 'yellow'
      })

      geometry5 = new THREE.Geometry()
      material5 = new THREE.LineBasicMaterial({
        color: 'pink'
      })



      for (let i = -size; i <= size; i += steps) {

        geometry.vertices.push(new THREE.Vector3(-size, -0.04, i))
        geometry.vertices.push(new THREE.Vector3(size, -0.04, i))

        geometry.vertices.push(new THREE.Vector3(i, -0.04, -size))
        geometry.vertices.push(new THREE.Vector3(i, -0.04, size))
      }

      const line = new THREE.Line(geometry, material, THREE.LinePieces)

      scene.add(line)



      for (let i = -size2; i <= size2; i += steps2) {

        geometry2.vertices.push(new THREE.Vector3(-size2, -0.04, i))
        geometry2.vertices.push(new THREE.Vector3(size2, -0.04, i))

        geometry2.vertices.push(new THREE.Vector3(i, -0.04, -size2))
        geometry2.vertices.push(new THREE.Vector3(i, -0.04, size2))
      }

      const line2 = new THREE.Line(geometry2, material2, THREE.LinePieces)

      scene.add(line2)









      for (let i = -size3; i <= size3; i += steps3) {

        geometry3.vertices.push(new THREE.Vector3(-size3, -0.04, i))
        geometry3.vertices.push(new THREE.Vector3(size3, -0.04, i))

        geometry3.vertices.push(new THREE.Vector3(i, -0.04, -size3))
        geometry3.vertices.push(new THREE.Vector3(i, -0.04, size3))
      }

      const line3 = new THREE.Line(geometry3, material3, THREE.LinePieces)

      scene.add(line3)



      for (let i = -size4; i <= size4; i += steps4) {

        geometry4.vertices.push(new THREE.Vector3(-size4, -0.04, i))
        geometry4.vertices.push(new THREE.Vector3(size4, -0.04, i))

        geometry4.vertices.push(new THREE.Vector3(i, -0.14, -size4))
        geometry4.vertices.push(new THREE.Vector3(i, -0.04, size4))
      }

      const line4 = new THREE.Line(geometry4, material4, THREE.LinePieces)

      scene.add(line4)

      for (let i = -size5; i <= size5; i += steps5) {

        geometry5.vertices.push(new THREE.Vector3(-size5, -0.04, i))
        geometry5.vertices.push(new THREE.Vector3(size5, -0.04, i))

        geometry5.vertices.push(new THREE.Vector3(i, -0.04, -size5))
        geometry5.vertices.push(new THREE.Vector3(i, -0.04, size5))
      }

      const line5 = new THREE.Line(geometry5, material5, THREE.LinePieces)

      scene.add(line5)

      camera.position.set( 70, 60, 580 )

      var light = new THREE.HemisphereLight( 0xfffffff, 0x000ff0, 0.4 )

      scene.add(light)

      line2.callback = bleep

      setInterval(function () {
      //  torusKnot1.rotation.y += 1
        line2.rotation.y += 0.1
        line.rotation.z += 0.1
        line4.rotation.x += -0.1
        line3.rotation.y += 0.2
        line3.rotation.x += 0.2
        line2.rotation.x += 0.2
        line5.rotation.x += 0.1
        line2.rotation.z += -0.1

        line.position.x += 0.1
        line.position.y += 0.1
        line2.position.z += 0.1
        line3.position.x += 0.1
        line4.position.y += 0.1
        line5.position.x += 0.1
        line2.position.x += 0.1
        line3.position.z += 0.1
        line5.position.y += 0.1
        line5.position.y += 0.1

      }, 100)





      render()
    }





    function animate() {
      requestAnimationFrame(animate)



      render()
    }

    //resize viewport
    window.addEventListener('resize', function(){
      const width = window.innerWidth
      const height = window.innerHeight
      renderer.setSize( width, height)

      camera.aspect = width / height
      camera.updateProjectionMatrix()
    })



    function render() {
      //using timer as animation
      raycaster.setFromCamera( mouse, camera )


      var intersects = raycaster.intersectObjects( scene.children )

      for ( var i = 0; i < intersects.length; i++ ) {

        bleep()


      }

      const speed = Date.now() * 0.0005
      camera.position.x = Math.cos(speed) * 3700
      camera.position.z = Math.sin(speed) * 7000
      camera.position.y = Math.sin(speed) * 7000

      //console.log(torusKnot2.position.x)
      camera.lookAt(scene.position) //0,0,0

      renderer.render(scene, camera)
    }

    window.addEventListener( 'mousemove', onMouseMove, false )



  }

  componentWillUnmount() {

    Tone.context.close()


  }


  toggleActive(){
    this.setState({
      active: false
    })
  }


  render() {



    return(
      <main>
        {this.state.active && <div className="modal is-active">
          <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">Grids</p>
              <button className="delete" aria-label="close" onClick={this.toggleActive} ></button>
            </header>
            <section className="modal-card-body">
            {"An experiment to try and use both Tone.js and Three.js at the same time. Getting them to interact was not as straight forward as I had thought it would be as it turns out you can't just stick an event handler on an element created with Three."}
            </section>
          </div>
        </div>}

        <div id="threeDiv">
        </div>


      </main>


    )
  }
}

export default Grid
