import React from 'react'
import { Link } from 'react-router-dom'
import  Granim from 'granim'





class Home extends React.Component{
  constructor(){
    super()

    this.state = {

    }
  }

  componentDidMount() {
    const granimInstance = new Granim({
      element: '#canvas-complex',
      direction: 'diagonal',
      isPausedWhenNotInView: true,
      states: {
        'default-state': {
          gradients: [
            [
              { color: '#833ab4', pos: .2 },
              { color: '#fd1d1d', pos: .8 },
              { color: '#38ef7d', pos: 1 }
            ], [
              { color: '#40e0d0', pos: 0 },
              { color: '#ff8c00', pos: .2 },
              { color: '#ff0080', pos: .75 }
            ]

          ]
        }
      }
    })

  }



  render() {



    return(
      <main className="home-main">
        <div className='container'>
          <h1 className="title is-1">Tom Hinton</h1>        </div>
        <canvas id="canvas-complex"></canvas>


      </main>


    )
  }
}

export default Home
