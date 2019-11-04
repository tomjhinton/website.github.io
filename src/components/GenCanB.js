
import React from 'react'


class GenCanB extends React.Component{
  constructor(){
    super()
    this.toggleActive = this.toggleActive.bind(this)
    this.state = {
      active: true

    }
  }


  componentDidMount() {

    var canvas = document.querySelector('canvas');
    var context = canvas.getContext('2d');

    var size = 320;
    var dpr = window.devicePixelRatio;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    context.scale(dpr, dpr);
    context.lineWidth = (Math.random() * 4)
    context.strokeStyle = `rgba(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},0.1)`


    var finalSize = 6;
    var startSteps;
    var offset = 1;
    var tileStep = (size - offset * 3) / 5;
    var startSize = tileStep;
    var directions = [-1, 0, 1];

    function draw(x, y, width, height, xMovement, yMovement, steps) {
      context.beginPath();
      context.rect(x, y, width, height);
      context.stroke();

      if(steps >= 0) {
        var newSize = (startSize) * (steps / startSteps) + finalSize;
        var newX = x + (width - newSize) / Math.random()
        var newY = y + (height - newSize) / Math.random()
        newX = newX - ((x - newX) / (steps + 12)) * xMovement
        newY = newY - ((y - newY) / (steps + 2)) * yMovement
        context.strokeStyle = `rgba(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},0.1)`
        draw(newX, newY, newSize, newSize, xMovement, yMovement, steps - 1);
      }
    }

    for( var x = offset; x < size - offset; x += tileStep) {
      for( var y = offset; y < size - offset; y += tileStep) {
        startSteps = 12 + Math.ceil(Math.random() * 123)
        var xDirection = directions[Math.floor(Math.random() * directions.length)]
        var yDirection = directions[Math.floor(Math.random() * directions.length)]
        draw(x, y, startSize, startSize, xDirection, yDirection, startSteps - 1);
      }
    }


    function draw2(x, y, width, height, xMovement, yMovement, steps) {
      context.beginPath();
      context.rect(x, y, width, height);
      context.stroke();

      if(steps >= 0) {
        var newSize = (startSize) * (steps / startSteps) + finalSize;
        var newX = x + (width - newSize) / Math.random()
        var newY = y + (height - newSize) / Math.random()
        newX = newX - ((x - newX) / (steps + 2)) * xMovement
        newY = newY - ((y - newY) / (steps + 2)) * yMovement
        context.strokeStyle = `rgba(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},0.1)`
        draw(newX, newY, newSize, newSize, xMovement, yMovement, steps - 2);
      }
    }

    for( var x2 = offset; x < size - offset; x += tileStep) {
      for( var y2 = offset; y < size - offset; y += tileStep) {
        startSteps = 2 + Math.ceil(Math.random() * 12)
        var xDirection2 = directions[Math.floor(Math.random() * directions.length)]
        var yDirection2 = directions[Math.floor(Math.random() * directions.length)]
        draw(x2, y2, startSize, startSize, xDirection2, yDirection2, startSteps - 1);
      }
    }



    function drawComics(){

      context.lineWidth = (Math.random() * 4)
      context.strokeStyle = `rgba(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},0.5)`
      draw(Math.floor(Math.random() * 2000), Math.floor(Math.random() * 1000), 20  + Math.floor(Math.random() * 280), 90)
      draw(Math.floor(Math.random() * 1000), Math.floor(Math.random() * 1000), 20 + Math.floor(Math.random() * 280), 5)
      draw(Math.floor(Math.random() * 1000), Math.floor(Math.random() * 1000), 20 + Math.floor(Math.random() * 280), 35)

      draw2(Math.floor(Math.random() * 2000), Math.floor(Math.random() * 1000), 20  + Math.floor(Math.random() * 280), 90)
      draw2(Math.floor(Math.random() * 1000), Math.floor(Math.random() * 1000), 20 + Math.floor(Math.random() * 280), 5)
      draw2(Math.floor(Math.random() * 1000), Math.floor(Math.random() * 1000), 20 + Math.floor(Math.random() * 280), 35)


    }

    drawComics()


    setInterval(function(){
      drawComics()
    }, 10)

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
              <p className="modal-card-title">GenCanB</p>
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

export default GenCanB
