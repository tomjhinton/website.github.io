import React from 'react'
import { Link } from 'react-router-dom'
import  Granim from 'granim'
import Slider from 'react-slick'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import IconAmazonwebservices from 'react-devicon/amazonwebservices/original'

library.add(fab, faCheckSquare, faCoffee)

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

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
          <h1 className="title is-1">Tom Hinton</h1>
          <h2 className="title is-2">Junior Web Developer</h2>


          <h2 className="title is-2">Skills</h2>
          <div className="grayscale">

            <IconAmazonwebservices  data-aos="flip-left" />
            <FontAwesomeIcon icon={['fab', 'react']} size="6x" pulse/>
            <FontAwesomeIcon icon={['fab', 'node']} size="6x" pulse/>
            <FontAwesomeIcon icon={['fab', 'python']} size="6x" pulse/>
            <FontAwesomeIcon icon={['fab', 'js']} size="6x" pulse/>
            <FontAwesomeIcon icon={['fab', 'github']} size="6x" pulse/>
            <FontAwesomeIcon icon={['fab', 'sass']} size="6x" pulse/>
            <FontAwesomeIcon icon={['fab', 'sql']} size="6x" pulse/>
            <FontAwesomeIcon icon={['fab', 'html5']} size="6x" pulse/>

          </div>

          <h2 className="title is-2" >About Me</h2>
          <p>
          ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789
          ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789
          ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789
          ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789
          ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789
          </p>
          <h2 className="title is-2">My Work</h2>

          <Slider {...settings}>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
            <div>
              <h3>7</h3>
            </div>
            <div>
              <h3>8</h3>
            </div>
            <div>
              <h3>9</h3>
            </div>
          </Slider>




        </div>



      </main>


    )
  }
}

export default Home
