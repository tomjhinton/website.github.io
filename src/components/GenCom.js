import React from 'react'


class GenCom extends React.Component{
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

    var c2 = document.getElementById('myCanvas2')
    var ctx2 = c2.getContext('2d')


    var c3 = document.getElementById('myCanvas3')
    var ctx3 = c3.getContext('2d')

    var c4 = document.getElementById('myCanvas4')
    var ctx4 = c4.getContext('2d')




    function wrapText (context, text, x, y, maxWidth, lineHeight) {

      var words = text.split(' '),
        line = '',
        lineCount = 0,
        i,
        test,
        metrics

      for (i = 0; i < words.length; i++) {
        test = words[i]
        metrics = context.measureText(test)
        while (metrics.width > maxWidth) {
          // Determine how much of the word will fit
          test = test.substring(0, test.length - 1)
          metrics = context.measureText(test)
        }
        if (words[i] != test) {
          words.splice(i + 1, 0,  words[i].substr(test.length))
          words[i] = test
        }

        test = line + words[i] + ' '
        metrics = context.measureText(test)

        if (metrics.width > maxWidth && i > 0) {
          context.fillText(line, x, y)
          line = words[i] + ' '
          y += lineHeight
          lineCount++
        }
        else {
          line = test
        }
      }

        context.fillText(line, x, y);
    }



    let  text = ['The man was gone. He took a up time. It was a station of the spider was stripped with a cardvic hand. The street was a pool with a clinic of a port arrived too approaching real. “If you’re still sicks too never had time Case, he was the long tense key of the sound of white light from the stational “No,” he said, “okay?” “So how us if I need a side of two of this was still. She was still like a strange of second of Ashpool’s, too big against the sleeves of shadows. He stood in the stairs and the steel sand. “What’s in the most up to the man is all. I can kind a side money, he was a little shop. The one who put his head and still collective. It was a small raiser and the construct of his face gardens. “I you got him to dull she was in any of the show.”“What about Tell Gota a new small of the shattered board shows. Maelcum looked at the back of the shop. “Well, I was understand me to do it any dealing of the sound of my magnetic long teat of the paper space. The place was starting to the construct. He said the movement of the street of the seat o“What is it?” “You need a stand of data. You know what I was all the wish real?” Case flipped.',

      '"You down’t followed the conce, now, held the side on the still righand his tight that the seet mane of Finn’s smile with a door and clowed at the stung of his litted and caped on his chip into the strack of the took and forewer his waydare. Hever it the swill in a stort littered the stomed his ben The black of a show starms of the fides and started Riviera seemed the show and Eurshite the pilled for a still kendic of the stare of the spill and was stingle stare or the stoothing the took the disple and was silever the Rense that the conside of the stad to the stope showed and coulded the siliHe was take with a show of the stooth of the conest been the consile of white that the stooth of the star the stare to to thing show the stratcher siliting the dead the blank of the strackned construct of his back of a stracing and litting been parision of the way on his light on beath a stors of t “How a coulder the close, through the store undefice in your hands in the block that a contruct of the stare. The fister. “Tell she Now?” He looked the bright on the still that’s the said a strick interst of dish of before taking the live of the streething with a strack of the strack beer shuring t “That’s condow the talk with down the stooths of the contantal white stain the she shoulding the stratcht of the stard out the sonsion of the strick and and his littered the stare of the crick of something the collowed the sweent of they was a cand of a crossical vacked into Molly cool take the Vil “What’s you could through this some hand. “You were was down the stone of the core turned the stood and grays the siring to a steal mete.',

      'The man was gone. He took a up time. It was a station of the spider was stripped with a cardvic hand. The street was a pool with a clinic of a port arrived too approaching real. “If you’re still sicks too never had time Case, he was the long tense key of the sound of white light from the stational “No,” he said, “okay?”“So how us if I need a side of two of this was still. She was still like a strange of second of Ashpool’s, too big against the sleeves of shadows. He stood in the stairs and the steel sand.“What’s in the most up to the man is all. I can kind a side money, he was a little shop. The one who put his head and still collective. It was a small raiser and the construct of his face gardens. “I you got him to dull she was in any of the show.”“What about Tell Gota a new small of the shattered board shows. Maelcum looked at the back of the shop. “Well, I was understand me to do it any dealing of the sound of my magnetic long teat of the paper space. The place was starting to the construct. He said the movement of the street of the seat o“What is it?”“You need a stand of data. You know what I was all the wish real?” Case flipped.',

      '“Not the same side,” she said, “gone start the market of the blades made of his locks. “Maybe you’re not the sides of th’ Damba? Your both stone, okay?” “What is it?” “That’s the memories to turn it at the money. He was starting to do the shadows on the startered leather jumps. “I’m doing to get th “Hey.” Case stared around the street, a faint series of one he’d seen a white still neck. The station of the barrel had been made of the deap of the impossible with a compap to—” “You own me some screen.”The light first competic system.2::0::0:TOOOSART OFON, Screaming Fist. I can’t be  eid. He was already with an exist, a meter of the security sypection rising to the steps of the face of the stage of your beach. But I don’t know, what he wanna pulled the side of the snake. There had a side of the s“You have a lot of that shit?”',

      'He shook his head. And then they were the man in the passage of them, the polycarbon. The stage was a snake of pattern filmed with a corridor of the spherea of these suit.”Case felt the steel door was their light. “Come on, mon, then.”The pistol showed him a thing that he was through the construct of the street of some stranger was startled across the screen darkness. He wore a still sleeveless small and began to remove the star and started at the shadows.“I don’t think there’s the foar of the security of the sound of the locks of the shake. Pierre aloud, an enormous copped across a single construct of the corridor. He shook his head and showed his face. “She told me the other shoot.”Molly had said, put it on the shop. “I guess I need for what they are and that she was sometimes.”“I don’t know.”'




    ]

    ctx.font = '18px/1.4 arial, sans-serif';
    ctx.fillStyle = '#2a2a2a';

    wrapText(ctx4, text[Math.floor(Math.random() * 5)], 40, 40, 400, 18)







    function draw(startX, startY, len, angle) {
      const blah = Math.floor(Math.random()*100)

      ctx.beginPath()
      ctx.save()

      ctx.translate(startX, startY)
      ctx.rotate(angle * Math.PI/blah)
      ctx.moveTo(0, 0)
      ctx.shadowBlur = 25;
      ctx.shadowColor = 'rgba(0,0,0,0.8)';
      ctx.lineTo(len, -len)
      ctx.stroke()
      ctx.strokeStyle = 'rgba(0,0,0,1)'
      ctx.lineWidth = 1


      if(len < 9) {
        ctx.restore()
        return
      }

      draw(0, -len, len*0.72, -16)
      draw(0, -len, len*0.62, 15)

      ctx.restore()
    }


    function draw2(startX, startY, len, angle) {
      const blah = Math.floor(Math.random() * 18)
      ctx2.beginPath()
      ctx2.save()

      ctx2.translate(startX, startY)
      ctx2.rotate(angle * Math.PI/blah)
      ctx2.moveTo(0, 0)
      ctx2.bezierCurveTo(10, -len/2, 30, -len/2, 0, -len)
      ctx2.stroke()
      ctx2.strokeStyle = 'rgba(00,0,0,0.5)'
      ctx2.lineWidth = 0.4


      if(len < 10) {
        ctx.restore()
        return
      }

      draw2(0, -len, len*0.9, -14)
      draw2(0, -len, len*0.8, 15)

      ctx2.restore()
    }

    function draw3(startX, startY, len, angle) {
      const blah = Math.floor(Math.random() * 29)

      ctx3.beginPath()
      ctx3.save()

      ctx3.translate(startX, startY)
      ctx3.rotate(angle * Math.PI/blah)
      ctx3.moveTo(0, 0)
      ctx3.lineTo(0, -len)
      ctx3.lineStyle = 'rgba(0,0,0,0.1)'
      ctx3.stroke()
      ctx3.strokeStyle = 'rgba(0,0,0,0.1)'
      ctx3.lineWidth = 50



      if(len < 8) {
        ctx.restore()
        return
      }

      draw3(0, -len, len*0.8, -25)
      draw3(0, -len, len*0.8, 5)

      ctx3.restore()
    }


    function drawComics(){

      //draw(450, 700, 250, -10)
      draw(350, 250, 100, -10)
      draw(350, 250, 100, 10)
      //draw3(150, 250, 50, 10)
      draw2(50, 50, 100, 0)
      draw2(50, 50, 100, 1)
      //draw(900, 250, 50, 10)
      draw3(50, 30, 100, 10)
      draw3(50, 30, 100, 10)


    }

    drawComics()

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
              <p className="modal-card-title">GenCom</p>
              <button className="delete" aria-label="close" onClick={this.toggleActive} ></button>
            </header>
            <section className="modal-card-body">
            {"An attempt to create a genrerative comic using JavaScript to draw fractal trees on canvas. The text has been generated using TensorFlow which I used to create a Recursive Neural Network trained on William Gibson's novel Neuromancer"}
            </section>
          </div>
        </div>}
        <canvas id="myCanvas" width="500" height="500" style={{border: '5px solid #000000'}}>
        </canvas>

        <canvas id="myCanvas2" width="750" height="500" style={{border: '5px solid #000000'}}>
        </canvas>

        <canvas id="myCanvas3" width="500" height="500" style={{border: '5px solid #000000'}}>
        </canvas>
        <canvas id="myCanvas4" width="500" height="500" style={{border: '5px solid #000000'}}>
        </canvas>

      </main>


    )
  }
}

export default GenCom
