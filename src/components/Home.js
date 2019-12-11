import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faAt, faLink } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import anime from 'animejs'

library.add(fab, faCheckSquare, faCoffee, faAt, faLink)

import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init()

import IconMongodb from 'react-devicon/mongodb/original'
import IconJavascript from 'react-devicon/javascript/original'
import IconCss3 from 'react-devicon/css3/original'
import IconExpress from 'react-devicon/express/original'
import IconGit from 'react-devicon/git/original'
import IconGithub from 'react-devicon/github/original'
import IconHeroku from 'react-devicon/heroku/original'
import IconHtml5 from 'react-devicon/html5/original'
import IconNodejs from 'react-devicon/nodejs/original'
import IconNpm from 'react-devicon/npm/original-wordmark'
import IconPython from 'react-devicon/python/original'
import IconReact from 'react-devicon/react/original'
import IconSass from 'react-devicon/sass/original'
import IconWebpack from 'react-devicon/webpack/original'
import IconYarn from 'react-devicon/yarn/original'

class Home extends React.Component{
  constructor(){
    super()

    this.state = {

    }
  }

  componentDidMount() {

    anime({
      targets: '.spin',
      translateX: 0,
      rotate: '1turn',
      duration: 2800,
      easing: 'easeOutSine'
    });

    const boxesAnimation = anime({
      targets: 'h1',
      translateX: (elm, index, t) => index * 50,
      scale: 0.8,
      easing: 'easeInOutSine',
      delay: (elm, index, t) => index * 20,
      duration: 2200,
      loop: 4,
      direction: 'alternate',
    });


  }






  render() {









    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4
    }

    return(
      <main className="home-main">

        <div className="container">
          <h1 className="title is-1 spin" id="Tom" >Tom Hinton</h1>
          <h2 className="title is-2 spin">Junior Web Developer</h2>

          <br/>
          <h2 className="title is-2 spin">Skills</h2>
          <hr data-aos="zoom-in" data-aos-duration="3000" className=""/>
          <div>


            <h3 className="title is-3 spin">Frontend</h3>
            <div>
              <div className="tooltip">
                <IconJavascript name="JavaScript" data-aos="zoom-in" className="grayscale " width={'4em'} height={'4em'} />
                <div className="tooltiptext">JavaScript</div>
              </div>

              <div className="tooltip">
                <IconCss3 name="CSS" data-aos="zoom-in" className="grayscale " width={'4em'} height={'4em'} />
                <div className="tooltiptext">CSS</div>
              </div>

              <div className="tooltip">
                <IconHtml5 name="HTML" data-aos="zoom-in" className="grayscale " width={'4em'} height={'4em'} />
                <div className="tooltiptext">HTML</div>
              </div>

              <div className="tooltip">
                <IconReact name="REACT" data-aos="zoom-in" className="grayscale " width={'4em'} height={'4em'} />
                <div className="tooltiptext">REACT</div>
              </div>

              <div className="tooltip">
                <IconSass name="SASS" data-aos="zoom-in" className="grayscale " width={'4em'} height={'4em'}/>
                <div className="tooltiptext">SASS</div>
              </div>
            </div>


            <h3 className="title is-3 spin">Backend</h3>
            <div>

              <div className="tooltip">
                <IconMongodb name="MongoDB" data-aos="zoom-in" className="grayscale " width={'4em'} height={'4em'}/>
                <div className="tooltiptext">MongoDB</div>
              </div>

              <div className="tooltip">
                <IconNodejs name="Node" data-aos="zoom-in" className="grayscale " width={'4em'} height={'4em'} />
                <div className="tooltiptext">Node</div>
              </div>

              <div className="tooltip">
                <IconPython name="Python" data-aos="zoom-in" className="grayscale " width={'4em'} height={'4em'} />
                <div className="tooltiptext">Python</div>
              </div>

              <div className="tooltip">
                <IconExpress name="Express" data-aos="zoom-in" className="grayscale " width={'4em'} height={'4em'} />
                <div className="tooltiptext">Express</div>
              </div>

            </div>

            <h3 className="title is-3 spin">Other</h3>
            <div>

              <div className="tooltip">
                <IconWebpack name="Webpack" data-aos="zoom-in" className="grayscale " width={'4em'} height={'4em'} />
                <div className="tooltiptext">Webpack</div>
              </div>

              <div className="tooltip">
                <IconYarn name="Yarn" data-aos="zoom-in" className="grayscale " width={'4em'} height={'4em'} />
                <div className="tooltiptext">Yarn</div>
              </div>

              <div className="tooltip">
                <IconGithub name="Github" data-aos="zoom-in" className="grayscale " width={'4em'} height={'4em'} />
                <div className="tooltiptext">Github</div>
              </div>

              <div className="tooltip">
                <IconHeroku name="Heroku" data-aos="zoom-in" className="grayscale " width={'4em'} height={'4em'} />
                <div className="tooltiptext">Heroku</div>
              </div>

              <div className="tooltip">
                <IconNpm name="NPM" data-aos="zoom-in" className="grayscale " width={'4em'} height={'4em'} />
                <div className="tooltiptext">NPM</div>
              </div>

              <div className="tooltip">
                <IconGit name="GIT" data-aos="zoom-in" className="grayscale " width={'4em'} height={'4em'} />
                <div className="tooltiptext">GIT</div>
              </div>





            </div>














          </div>
          <br/>
          <br/>
          <h2 className="title is-2" data-aos="zoom-in" >About Me</h2>
          <hr data-aos="zoom-in"/>
          <p className="about" data-aos="zoom-in" >
          I started to learn how to code after discovering the world of creative coding. I had been studying Art History with a particular focus on the development of what would become known as Post-Internet Art. It brought into focus the possibility of using code as part of a creative practice, a way of actualising concepts and ideas in a visual and interesting way.
            <br/>
            <br/>


          I started to experiment with this myself, but it was in doing an immersive course at General Assembly that I learnt how to actualise fully fledged projects in a professional way. I am excited to be able to put these skills to work in a professional environment.

          </p>
          <br />


          <h2 className="title is-2" data-aos="zoom-in">My Work</h2>
          <hr data-aos="zoom-in"/>
          <div className ="container works">

            <h3 className="title is-3">catDetector</h3>
            <div className="columns" data-aos="zoom-in" >
              <div className="column is-half">

                <figure className="image">
                  <img src="images/cat.png" />
                </figure>
              </div>
              <div className="column is-half">
                <p className="desc">How often have you felt like your life lacks real time webcam based Cat detection? Problem solved.  Uses the tensorflow image detection and classification model coco-ssd and a users webcam to detect the presence of cats. </p>
                <a href="https://github.com/tomjhinton/catDetector" target="_blank"><IconGithub className="github"  width={'1em'} height={'1em'} /> </a>
                <a href="https://tomjhinton.github.io/catDetector/" target="_blank"><FontAwesomeIcon icon="link"/></a>
              </div>
            </div>

            <h3 className="title is-3">cyberbloboftherings</h3>
            <div className="columns" data-aos="zoom-in" >
              <div className="column is-half">

                <figure className="image">
                  <img src="images/cyberblob.png" />
                </figure>
              </div>
              <div className="column is-half">
                <p className="desc">A 3D game built using Three.js.The game itself is simplistic, you have to navigate a blob through a series of rings using the mouse. Contains a basic generative soundtrack created with Tone.js</p>
                <a href="https://github.com/tomjhinton/cyberbloboftherings" target="_blank"><IconGithub className="github"  width={'1em'} height={'1em'} /> </a>
                <a href="https://tomjhinton.github.io/cyberbloboftherings/" target="_blank"><FontAwesomeIcon icon="link"/></a>
              </div>
            </div>


            <h3 className="title is-3">speakAndSpells</h3>
            <div className="columns" data-aos="zoom-in" >
              <div className="column is-half">

                <figure className="image">
                  <img src="images/speak.png" />
                </figure>
              </div>
              <div className="column is-half">
                <p className="desc">Navigate a block through a gap in an advancing wall by using your voice. The games simplistic but was mainly an excuse to make use of the speechCommands TensorFlow model. It works reasonably well though the failings do add a level of frustration that is quite amusing. You will find yourself angrily shouting at the screen at points. </p>
                <a href="https://github.com/tomjhinton/speakAndSpells" target="_blank"><IconGithub className="github"  width={'1em'} height={'1em'} /> </a>
                <a href="https://tomjhinton.github.io/speakAndSpells/" target="_blank"><FontAwesomeIcon icon="link"/></a>
              </div>
            </div>

            <h3 className="title is-3">alephBounce</h3>
            <div className="columns" data-aos="zoom-in" >
              <div className="column is-half">

                <figure className="image">
                  <img src="images/aleph.png" />
                </figure>
              </div>
              <div className="column is-half">
                <p className="desc">I made it look like that on purpose! alephBounce is a motion controlled 3D game with a Tone.js soundtrack. It uses Posenet a ML trained real-time pose estimation model to track a players movements, by moving their arms they can move a block on the screen. They have to dodge an increasing number of bouncing balls. The animation and rendering are Three.js and the physics simulations are done by Cannon.js.</p>
                <a href="https://github.com/tomjhinton/alephBounce" target="_blank"><IconGithub className="github"  width={'1em'} height={'1em'} /> </a>
                <a href="https://tomjhinton.github.io/alephBounce/" target="_blank"><FontAwesomeIcon icon="link"/></a>
              </div>
            </div>


            <h3 className="title is-3">aleatoricBounce</h3>
            <div className="columns" data-aos="zoom-in" >
              <div className="column is-half">

                <figure className="image">
                  <img src="images/bounce.png" />
                </figure>
              </div>
              <div className="column is-half">
                <p className="desc"> Loosely gamified aleatoric computer music. There is a white square and some balls bouncing around. You control a rectangle, if you get it in the square you gain some lives, if a ball gets in the square, you lose a life and an extra ball is added. As the balls bounce they trigger Tone.js synthesised sounds. Part game, part composition, part web-site. </p>
                <a href="https://github.com/tomjhinton/aleatoricBounce" target="_blank"><IconGithub className="github"  width={'1em'} height={'1em'} /> </a>
                <a href="https://tomjhinton.github.io/aleatoricBounce/" target="_blank"><FontAwesomeIcon icon="link"/></a>
              </div>
            </div>




            <h3 className="title is-3">magToei</h3>
            <div className="columns" data-aos="zoom-in" >
              <div className="column is-half">

                <figure className="image">
                  <img src="images/mag.png" />
                </figure>
              </div>
              <div className="column is-half">
                <p className="desc">Recursive generative music using Magenta and the Tensorflow model drum_kit_rnn, it is initially using the first 14 notes of Twinkle Twinkle Little Star as an input but then feeds its own generation back into itself to create further patterns.</p>
                <a href="https://github.com/tomjhinton/magToei" target="_blank"><IconGithub className="github"  width={'1em'} height={'1em'} /> </a>
                <a href="https://tomjhinton.github.io/magToei/" target="_blank"><FontAwesomeIcon icon="link"/></a>
              </div>
            </div>


            <h3 className="title is-3">INCRENFINITY</h3>
            <div className="columns" data-aos="zoom-in" >
              <div className="column is-half">

                <figure className="image">
                  <img src="images/Increnfinity.png" />
                </figure>
              </div>
              <div className="column is-half">
                <p className="desc">A plotless infinite incremental game. The player picks the names of the resources to collect and the thing that produces them and then those resources increase by rates influenced by desicions made by the player. Inspired by Kittens Game and Universal Paperclips, styling has been kept to a bare minimum. Depending on your tastes these games are either highly addictive or unfathomably boring. </p>
                <a href="https://github.com/tomjhinton/increnfinity" target="_blank"><IconGithub className="github"  width={'1em'} height={'1em'} /> </a>
                <a href="https://tomjhinton.github.io/increnfinity/" target="_blank"><FontAwesomeIcon icon="link"/></a>
              </div>
            </div>


            <h3 className="title is-3">pastelDOA</h3>
            <div className="columns" data-aos="zoom-in" >
              <div className="column is-half">

                <figure className="image">
                  <img src="images/pastel.png" />
                </figure>
              </div>
              <div className="column is-half">
                <p className="desc">A canvas and React based game where the player has to keep inside a rotating rectangle. Direction controls refer to the original orientation of the rectangle so the player has to keep track of which way is up! Can also be controlled by touch on mobile devices.</p>
                <a href="https://github.com/tomjhinton/pastelDOA" target="_blank"><IconGithub className="github"  width={'1em'} height={'1em'} /> </a>
                <a href="https://tomjhinton.github.io/pastelDOA/" target="_blank"><FontAwesomeIcon icon="link"/></a>
              </div>
            </div>

            <h3 className="title is-3">ebm</h3>
            <div className="columns" data-aos="zoom-in" >
              <div className="column is-half">

                <figure className="image">
                  <img src="images/ebm.png" />
                </figure>
              </div>
              <div className="column is-half">
                <p className="desc">A canvas and React based game where the player has to keep inside a rotating rectangle. Direction controls refer to the original orientation of the rectangle so the player has to keep track of which way is up! Can also be controlled by touch on mobile devices.</p>
                <a href="https://github.com/tomjhinton/ebm" target="_blank"><IconGithub className="github"  width={'1em'} height={'1em'} /> </a>
                <a href="https://tomjhinton.github.io/ebm/" target="_blank"><FontAwesomeIcon icon="link"/></a>
              </div>
            </div>




            <h3 className="title is-3" data-aos="zoom-in">Tetris</h3>
            <div className="columns is-multiline" data-aos="zoom-in" >
              <div className="column is-half">

                <figure className="image ">
                  <img src="images/Tetris.png" />
                </figure>
              </div>
              <div className="column is-half is-desktop is-vcentered">
                <p className="desc"> A solo project built over a one week timeframe, the brief for this project was to build a game from a set-list utilising HTML, CSS and JavaScript.</p>

                <div className="links">
                  <a href="https://github.com/tomjhinton/SEI-Project01" target="_blank"><IconGithub className="github"  width={'1em'} height={'1em'} /> </a>

                  <a href="https://tomjhinton.github.io/SEI-Project01/" target="_blank"><FontAwesomeIcon icon="link"/></a>
                </div>


              </div>
            </div>
            <h3 className="title is-3">.movieBase()</h3>
            <div className="columns" data-aos="zoom-in" >
              <div className="column is-half">

                <figure className="image ">
                  <img src="images/movieBase.png" />
                </figure>
              </div>
              <div className="column is-half is-multiline">
                <p className="desc"> .movieBase() was a site that allowed users to search for films and receive information about the film, an embedded video of its trailer and recommendations of similar films that they might also like. We used OMDB’s API to get initial information about a film that a user searched for and then fed that information into themoviedb’s API to find the URL of the film’s trailer and a selection of similar films. A user could then click on any of the similar films to receive the same information for that title. Within the project we pair coded on a single laptop so all aspects of the project were handled as part of a team.</p>
                <a href="https://github.com/tomjhinton/SEI-Project02" target="_blank"><IconGithub className="github"  width={'1em'} height={'1em'} /> </a>

                <a href="https://tomjhinton.github.io/SEI-Project02/" target="_blank"><FontAwesomeIcon icon="link"/></a>
              </div>
            </div>
            <h3 className="title is-3">EventUp</h3>

            <div className="columns" data-aos="zoom-in" >
              <div className="column is-half">
                <figure className="image">
                  <img src="images/EventUp.png" />
                </figure>

              </div>
              <div className="column is-half">
                <p className="desc">EventUp was a site that allowed promoters to upload details about their upcoming events. It also used Songkick’s API to provide information about events that had not been added by our users about the venues that the events would be held at. With this information we were able to use Mapbox to provide a map showing the location of the event on its page. I worked mainly on the form to allow people to add events to our database and on integrating the map.
                </p>
                <a href="https://github.com/tomjhinton/SEI-project03-fork" target="_blank"><IconGithub className="github"  width={'1em'} height={'1em'} /> </a>

                <a href="https://gaeventup.herokuapp.com" target="_blank"><FontAwesomeIcon icon="link"/></a>
              </div>
            </div>
            <h3 className="title is-3">Intersitial</h3>
            <div className="columns" data-aos="zoom-in" >
              <div className="column is-half">

                <figure className="image">
                  <img src="images/Inter.png" />
                </figure>
              </div>
              <div className="column is-half">
                <p className="desc">Interstitial was a site designed to allow users to showcase creative projects made with code and allowed people to post adverts looking for people who worked within a specific medium. I used a SQL backend to store information on the backend and then had to work out how to effectively display things on the frontend so that I could show code snippets and actual examples of the finished works in a way that was most informative.</p>
                <a href="https://github.com/tomjhinton/sei-project-04" target="_blank"><IconGithub className="github"  width={'1em'} height={'1em'} /> </a>
                <a href="https://interstitialapp.herokuapp.com/#/" target="_blank"><FontAwesomeIcon icon="link"/></a>
              </div>
            </div>





          </div>
          <br/>
          <h2 className="title is-2" data-aos="zoom-in">Other</h2>
          <hr data-aos="zoom-in"/>
          <div className ="container works">
            <h3 className="title is-3" data-aos="zoom-in">Interactive Canvas Animations</h3>
            <div className="columns is-multiline" data-aos="zoom-in" >
              <div className="column is-half">

                <figure className="image ">
                  <img src="images/canvas.png" />
                </figure>
              </div>
              <div className="column is-half is-desktop is-vcentered">
                <p className="desc"> Experiments with canvas animations that are interactive when hovered over.</p>

                <div className="links">
                  <a href="https://github.com/tomjhinton/reactCanvasInter" target="_blank"><IconGithub className="github"  width={'1em'} height={'1em'} /> </a>

                  <a href="https://tomjhinton.github.io/reactCanvasInter/#/" target="_blank"><FontAwesomeIcon icon="link"/></a>
                </div>


              </div>
            </div>

            <h3 className="title is-3" data-aos="zoom-in">Three.js Animations</h3>
            <div className="columns is-multiline" data-aos="zoom-in" >
              <div className="column is-half">

                <figure className="image ">
                  <img src="images/three.png" />
                </figure>
              </div>
              <div className="column is-half is-desktop is-vcentered">
                <p className="desc"> Experiments with Three.js animations.</p>

                <div className="links">
                  <a href="https://github.com/tomjhinton/reactThreeInter" target="_blank"><IconGithub className="github"  width={'1em'} height={'1em'} /> </a>

                  <a href="https://tomjhinton.github.io/reactThreeInter/#/" target="_blank"><FontAwesomeIcon icon="link"/></a>
                </div>


              </div>
            </div>




          </div>

          <footer className="footer" data-aos="zoom-in" >
            <h2 className="title is-2" data-aos="zoom-in">Contact Me...</h2>
            <hr data-aos="zoom-in"/>
            <a href="https://www.linkedin.com/in/tom-hinton/" target="_blank"><FontAwesomeIcon icon={['fab', 'linkedin']} /> tom-hinton </a>
            <br/>

            <a href="https://twitter.com/tomjhinton" target="_blank"><FontAwesomeIcon icon={['fab', 'twitter']} />  tomjhinton </a>
            <br/>

            <a href="https://github.com/tomjhinton" target="_blank"><FontAwesomeIcon icon={['fab', 'github']} />  tomjhinton </a>
            <br/>


            <a href="https://www.instagram.com/svg.png/ " target="_blank"><FontAwesomeIcon icon={['fab', 'instagram']} />  SVG.PNG</a>
            <br/>

            <a href="https://www.instagram.com/above_the_port/ " target="_blank"><FontAwesomeIcon icon={['fab', 'instagram']} />  above_the_port</a>
            <br/>



            <a href="mailto:tomjhinton@gmail.com"> <FontAwesomeIcon icon="at"/> </a> tomjhinton@gmail.com


          </footer>

        </div>



      </main>


    )
  }
}

export default Home
