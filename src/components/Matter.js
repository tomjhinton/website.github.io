import React from 'react'
import { Link } from 'react-router-dom'


import Matter from 'matter-js'




class WebgazerTone extends React.Component{
  constructor(){
    super()

    this.state = {

    }



  }

  componentDidMount() {

    var Engine = Matter.Engine,
      Render = Matter.Render,
      World = Matter.World,
      Bodies = Matter.Bodies,
      MouseConstraint = Matter.MouseConstraint,
      Mouse = Matter.Mouse

// create an engine
var engine = Engine.create()

// create a renderer
var render = Render.create({
      element: document.body,
      engine: engine
})

// create two boxes and a ground
var boxA = Bodies.rectangle(400, 200, 80, 80)
var boxB = Bodies.rectangle(250, 250, 80, 80, { isStatic: true })
var boxC = Bodies.rectangle(450, 50, 800, 80)
var circ = Matter.Bodies.circle(500, 150, 120)
var poly = Matter.Bodies.polygon(450, 250, 10, 120)
var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true })

// add all of the bodies to the world
World.add(engine.world, [circ, boxA, boxB, boxC, poly, ground], mouse)
engine.world.gravity.y = 0.1;


var mouse = Mouse.create(render.canvas),
        mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: false
                }
            }
        });


    // keep the mouse in sync with rendering
    render.mouse = mouse;




// run the engine
Engine.run(engine)

// run the renderer
Render.run(render)





  }



  render() {



    return(
      <main className="home-main">
        <div className='container'>

        </div>



      </main>


    )
  }
}

export default WebgazerTone
