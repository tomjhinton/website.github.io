import React from 'react'
const THREE = require('three')


let scene
let camera
import Tone from 'tone'
const synthA = new Tone.DuoSynth().toMaster()
const synthB = new Tone.DuoSynth().toMaster()


const notes = ['E4','F4','G4','A4','D4','E3','F3','G3','A3','D3']
const notesLow = ['E1','F1','G1','A1','D1','E2','F2','G2','A2','D2']

class Grid extends React.Component{
  constructor(){
    super()

    this.state = {

    }
  }


  componentDidMount() {


    function bleep(){
      synthB.triggerAttackRelease(notes[Math.floor(Math.random() * 9)], 1)

    }


    function bleep2(){
      synthA.triggerAttackRelease(notes[Math.floor(Math.random() * 9)], 1)
      setInterval(function(){
        synthA.triggerAttackRelease(notes[Math.floor(Math.random() * 9)], 1)
        setTimeout(function(){
          synthA.triggerAttackRelease(notes[Math.floor(Math.random() * 9)], 1)
          setTimeout(function(){
            synthA.triggerAttackRelease(notes[Math.floor(Math.random() * 9)], 1)
          }, 1000)
        }, 1000)
      }, 2500)



    }

    function bleep3(){
      synthA.triggerAttackRelease(notesLow[Math.floor(Math.random() * 9)], 1)
      setInterval(function(){
        synthA.triggerAttackRelease(notesLow[Math.floor(Math.random() * 9)], 1)
        setTimeout(function(){
          synthA.triggerAttackRelease(notesLow[Math.floor(Math.random() * 9)], 1)
          setTimeout(function(){
            synthA.triggerAttackRelease(notesLow[Math.floor(Math.random() * 9)], 1)
          }, 1000)
        }, 1000)
      }, 2500)



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
    let mesh

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
      document.body.appendChild(renderer.domElement)
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


      var freeverb = new Tone.Freeverb().toMaster()
      synthA.connect(freeverb)





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

      }, 100);



      render()
    }

    var geometry6 = new THREE.TorusKnotGeometry( 100, 0.2, 90, 50 )
    var material6 = new THREE.MeshStandardMaterial({metalness: 0.7, roughness: 0.4})


    var torusKnot1 = new THREE.Mesh( geometry6, material6 )
    //scene.add(torusKnot1)

    var geometry7 = new THREE.TorusKnotGeometry( 100, 0.2, 20, 40 )



    var torusKnot2 = new THREE.Mesh( geometry7, material6 )
    //scene.add(torusKnot2)

    var geometry8 = new THREE.TorusKnotGeometry( 100, 0.2, 10, 30 )



    var torusKnot3 = new THREE.Mesh( geometry8, material6 )
    //scene.add(torusKnot3)

    var geometry9 = new THREE.TorusKnotGeometry( 120, 0.2, 15, 20 )



    var torusKnot4 = new THREE.Mesh( geometry9, material6 )
    //scene.add(torusKnot4)


    var geometry10 = new THREE.BoxGeometry( 20, 20, 20 )
    var geometry11 = new THREE.BoxGeometry( 10, 30, 10 )

    var geometry12 = new THREE.BoxGeometry( 5, 40, 5 )
    var geometry13 = new THREE.BoxGeometry( 3, 50, 3 )

    var cube = new THREE.Mesh( geometry10, material6 )
    var cube2 = new THREE.Mesh( geometry11, material6 )

    var cube3 = new THREE.Mesh( geometry12, material6 )
    var cube4 = new THREE.Mesh( geometry13, material6 )







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
      raycaster.setFromCamera( mouse, camera );


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

    window.addEventListener( 'mousemove', onMouseMove, false );



  }


  render() {



    return(
      <main className="home-main">



      </main>


    )
  }
}

export default Grid
