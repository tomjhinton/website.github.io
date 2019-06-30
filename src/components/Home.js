import React from 'react'
import { Link } from 'react-router-dom'
import  Granim from 'granim'
import Slider from 'react-slick'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import anime from 'animejs'

library.add(fab, faCheckSquare, faCoffee)

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
      targets: 'div',
      translateX: 0,
      rotate: '1turn',
      duration: 2800,
      easing: 'easeInOutSine'
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
          <h1 className="title is-1" id="Tom" >Tom Hinton</h1>
          <h2 className="title is-2">Junior Web Developer</h2>

          <br/>
          <h2 className="title is-2">Skills</h2>
          <div>

            <IconMongodb  data-aos="zoom-in" className="grayscale" width={'4em'} height={'4em'}/>
            <IconJavascript  data-aos="zoom-in" className="grayscale" width={'4em'} height={'4em'} />
            <IconCss3  data-aos="zoom-in" className="grayscale" width={'4em'} height={'4em'} />
            <IconExpress  data-aos="zoom-in" className="grayscale" width={'4em'} height={'4em'} />
            <IconGit  data-aos="zoom-in" className="grayscale" width={'4em'} height={'4em'} />
            <IconGithub  data-aos="zoom-in" className="grayscale" width={'4em'} height={'4em'} />
            <IconHeroku  data-aos="zoom-in" className="grayscale" width={'4em'} height={'4em'} />
            <IconHtml5  data-aos="zoom-in" className="grayscale" width={'4em'} height={'4em'} />
            <IconNodejs  data-aos="zoom-in" className="grayscale" width={'4em'} height={'4em'} />
            <IconNpm  data-aos="zoom-in" className="grayscale" width={'4em'} height={'4em'} />
            <IconPython  data-aos="zoom-in" className="grayscale" width={'4em'} height={'4em'} />
            <IconReact  data-aos="zoom-in" className="grayscale" width={'4em'} height={'4em'} />
            <IconSass  data-aos="zoom-in" className="grayscale" width={'4em'} height={'4em'} />
            <IconWebpack  data-aos="zoom-in" className="grayscale" width={'4em'} height={'4em'} />
            <IconYarn  data-aos="zoom-in" className="grayscale" width={'4em'} height={'4em'} />







          </div>
          <br/>
          <h2 className="title is-2" data-aos="zoom-in" >About Me</h2>
          <p className="glitch">
          I started to learn how to code because of the art and music that I love. I had been studying Art History with a particular focus on the development of what would become known as Post-Internet Art. It brought into focus the possibility of using code as part of a creative practice, a way of actualising concepts and ideas in a visual and interesting way. At around the same time, I started to listen to more electronic music and kept reading about live-coded sets and visuals. I started to wonder how hard it could be to do it myself. It turns out it’s quite hard to do it well but it’s a lot of fun to learn how to do it badly. This led to me joining a Bootcamp taught by General Assembly as a way of learning how to do slightly more “useful” things with the same skill set.

          </p>
          <br />
          <h2 className="title is-2">My Work</h2>

          <div className="columns is-multiline">
            <div className="column is-half">
              <h3 className="title is-3">Tetris</h3>
              <figure className="image ">
                <img src="images/Tetris.png" />
              </figure>
            </div>
            <div className="column is-half is-desktop is-vcentered">
              <p className="desc"> A solo project built over a one week timeframe, the brief for this project was to build a game from a set-list utilising HTML, CSS and JavaScript.</p>
              <IconGithub className="github"  width={'1em'} height={'1em'} />
            </div>
          </div>

          <div className="columns">
            <div className="column is-half">
              <h3 className="title is-3">.movieBase()</h3>
              <figure className="image ">
                <img src="images/movieBase.png" />
              </figure>
            </div>
            <div className="column is-half is-multiline">
              <p className="desc"> .movieBase() was a site that allowed users to search for films and receive information about the film, an embedded video of its trailer and recommendations of similar films that they might also like. We used OMDB’s API to get initial information about a film that a user searched for and then fed that information into themoviedb’s API to find the URL of the film’s trailer and a selection of similar films. A user could then click on any of the similar films to receive the same information for that title. Within the project we pair coded on a single laptop so all aspects of the project were handled as part of a team.</p>
              <IconGithub className="github"  width={'1em'} height={'1em'} />
            </div>
          </div>

          <div className="columns">
            <div className="column is-half">
              <h3 className="title is-3">EventUp</h3>
              <figure className="image">
                <img src="images/EventUp.png" />
              </figure>

            </div>
            <div className="column is-half">
              <p className="desc">EventUp was a site that allowed promoters to upload details about their upcoming events. It also used Songkick’s API to provide information about events that had not been added by our users about the venues that the events would be held at. With this information we were able to use Mapbox to provide a map showing the location of the event on its page. I worked mainly on the form to allow people to add events to our database and on integrating the map.
              </p>
              <IconGithub className="github"  width={'1em'} height={'1em'} />
            </div>
          </div>

          <div className="columns">
            <div className="column is-half">
              <h3 className="title is-3">Intersitial</h3>
              <figure className="image">
                <img src="images/Inter.png" />
              </figure>
            </div>
            <div className="column is-half">
              <p className="desc">Interstitial was a site designed to allow users to showcase creative projects made with code and allowed people to post adverts looking for people who worked within a specific medium. I used a SQL backend to store information on the backend and then had to work out how to effectively display things on the frontend so that I could show code snippets and actual examples of the finished works in a way that was most informative.</p>
              <IconGithub className="github"  width={'1em'} height={'1em'} />
            </div>
          </div>


          <footer className="footer">
            <h2 className="title is-2">Contact Me...</h2>
          </footer>
            
        </div>



      </main>


    )
  }
}

export default Home
