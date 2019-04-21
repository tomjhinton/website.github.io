
var c = document.getElementById('myCanvas')
var ctx = c.getContext('2d')

var c2 = document.getElementById('myCanvas2')
var ctx2 = c2.getContext('2d')


var c3 = document.getElementById('myCanvas3')
var ctx3 = c3.getContext('2d')

function draw(startX, startY, len, angle) {
  const blah = Math.floor(Math.random() * 360)

  ctx.beginPath()
  ctx.save()

  ctx.translate(startX, startY)
  ctx.rotate(angle * Math.PI/blah)
  ctx.moveTo(0, 0)
  ctx.lineTo(0, -len)
  ctx.stroke()
  ctx.strokeStyle = 'rgba(0,0,0,1)'
  ctx.lineWidth = 1.2


  if(len < 8) {
    ctx.restore()
    return
  }

  draw(0, -len, len*0.72, -16)
  draw(0, -len, len*0.72, 15)

  ctx.restore()
}


function draw2(startX, startY, len, angle) {
  const blah = Math.floor(Math.random() * 360)
  ctx2.beginPath()
  ctx2.save()

  ctx2.translate(startX, startY)
  ctx2.rotate(angle * Math.PI/blah)
  ctx2.moveTo(0, 0)
  ctx2.lineTo(0, -len)
  ctx2.stroke()
  ctx2.strokeStyle = 'rgba(00,0,0,1)'
  ctx2.lineWidth = 1.2


  if(len < 10) {
    ctx.restore()
    return
  }

  draw2(0, -len, len*0.9, -14)
  draw2(0, -len, len*0.8, 15)

  ctx2.restore()
}

function draw3(startX, startY, len, angle) {
  const blah = Math.floor(Math.random() * 360)

  ctx3.beginPath()
  ctx3.save()

  ctx3.translate(startX, startY)
  ctx3.rotate(angle * Math.PI/blah)
  ctx3.moveTo(1, 0)
  ctx3.lineTo(0, -len)
  ctx3.lineStyle = 'rgba(0,0,0,1)'
  ctx3.stroke()
  ctx3.strokeStyle = 'rgba(0,0,0,1)'
  ctx3.lineWidth = 1.2



  if(len < 8) {
    ctx.restore()
    return
  }

  draw3(0, -len, len*0.8, -25)
  draw3(0, -len, len*0.8, 5)

  ctx3.restore()
}






//draw(450, 700, 250, -10)
draw(Math.floor(Math.random() * 500), Math.floor(Math.random() * 500), Math.floor(Math.random() * 200), -10)
draw(Math.floor(Math.random() * 500), Math.floor(Math.random() * 500), Math.floor(Math.random() * 200), 0)
//draw3(150, 200, 250, 10)
draw2(Math.floor(Math.random() * 500), Math.floor(Math.random() * 500), Math.floor(Math.random() * 200), 1)
draw2(Math.floor(Math.random() * 500), Math.floor(Math.random() * 500), Math.floor(Math.random() * 200), 1)
//draw(900, 200, 250, 10)
draw3(Math.floor(Math.random() * 500), Math.floor(Math.random() * 500), Math.floor(Math.random() * 200), 0)
draw3(Math.floor(Math.random() * 500), Math.floor(Math.random() * 500), Math.floor(Math.random() * 200), 0)
