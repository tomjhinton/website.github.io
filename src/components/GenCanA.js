import React from 'react'


class GenCanA extends React.Component{
  constructor(){
    super()
    this.toggleActive = this.toggleActive.bind(this)
    this.state = {
      active: true

    }
  }


  componentDidMount() {

    var c = document.getElementById('myCanvas')
    var ctx = c.getContext('2d')


    //const color = rgba(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.random()})


    function draw2(startX, startY, len, angle) {
      const blah = Math.floor(Math.random() * 360)
      ctx.strokeStyle = `rgba(255,255,255,${Math.random()})`
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.save()

      ctx.translate(startX, startY)
      ctx.rotate(angle * Math.PI/blah)
      ctx.moveTo(Math.floor(Math.random() * 9), Math.floor(Math.random() * 9))
      ctx.lineTo(Math.floor(Math.random() * 9), -len)
      ctx.stroke()
      ctx.strokeStyle = `rgba(255,255,255,${Math.random()})`
      ctx.lineWidth = 1


      if(len < 8) {
        ctx.restore()
        return
      }

      draw2(0, -len, len*0.72, Math.random() * 50)
      draw2(0, -len, len*0.72, Math.random() * 50)

      ctx.restore()
    }

    function draw(startX, startY, len, angle) {
      const blah = Math.floor(Math.random() * 180)
      ctx.strokeStyle = `rgba(0,0,0,${Math.random()})`
      ctx.lineWidth = 4
      ctx.beginPath()
      ctx.save()

      ctx.translate(startX, startY)
      ctx.rotate(angle * Math.PI/blah)
      ctx.moveTo(Math.floor(Math.random() * 9), Math.floor(Math.random() * 9))
      ctx.lineTo(Math.floor(Math.random() * 9), -len)
      ctx.stroke()
      ctx.strokeStyle = `rgba(0,0,0,${Math.random()})`
      ctx.lineWidth = 1


      if(len < 7) {
        ctx.restore()
        return
      }

      draw(0, -len, len*0.7, Math.random() * 50)
      draw(0, -len, len*0.7, Math.random() * 50)

      ctx.restore()
    }

    function draw3(startX, startY, len, angle) {
      const blah = Math.floor(Math.random() * 360)
      ctx.strokeStyle = `rgba(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},1))`
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.save()

      ctx.translate(startX, startY)
      ctx.rotate(angle * Math.PI/blah)
      ctx.moveTo(Math.floor(Math.random() * 9), Math.floor(Math.random() * 9))
      ctx.lineTo(Math.floor(Math.random() * 9), -len)
      ctx.stroke()
      ctx.strokeStyle = `rgba(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},1)`
      ctx.lineWidth = 1


      if(len < 8) {
        ctx.restore()
        return
      }

      draw3(0, -len, len*0.72, Math.random() * 90)
      draw3(0, -len, len*0.72, Math.random() * 90)

      ctx.restore()
    }



    function drawComics(){

      //draw(450, 700, 250, -10)
      draw(Math.floor(Math.random() * 2000), Math.floor(Math.random() * 1000), 20  + Math.floor(Math.random() * 280), -90)
      draw(Math.floor(Math.random() * 1000), Math.floor(Math.random() * 1000), 20 + Math.floor(Math.random() * 280), 5)

      draw2(Math.floor(Math.random() * 2000), Math.floor(Math.random() * 1000), 20 + Math.floor(Math.random() * 180), 15)
      draw2(Math.floor(Math.random() * 2000), Math.floor(Math.random() * 1000), 20 + Math.floor(Math.random() * 180), -15)
      draw3(Math.floor(Math.random() * 2000), Math.floor(Math.random() * 1000), 20 + Math.floor(Math.random() * 180), 15)
      draw3(Math.floor(Math.random() * 2000), Math.floor(Math.random() * 1000), 20 + Math.floor(Math.random() * 180), -15)
    }

    drawComics()


    setInterval(function(){
      drawComics()
    }, 100)

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
              <p className="modal-card-title">GenCanA</p>
              <button className="delete" aria-label="close" onClick={this.toggleActive} ></button>
            </header>
            <section className="modal-card-body">
            An experiment using JavaScript to draw fractal trees on canvas. It uses setIntervals and random numbers to create a geneartive constantly evolving series of patterns. 
            </section>
          </div>
        </div>}
        <canvas id="myCanvas" width="2200" height="1000">
        </canvas>


      </main>


    )
  }
}

export default GenCanA
