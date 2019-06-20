import React from 'react'
import ReactDOM from 'react-dom'
import 'bulma'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import ReactGA from 'react-ga';
import './style.scss'


import Home from './components/Home'
import Bleep from './components/Bleep'
import Grids from './components/Grids'
import GenCanA from './components/GenCanA'
import WebgazerTone from './components/webgazerTone'
import Matter from './components/Matter'
import Navbar from './components/Navbar'





function initializeReactGA() {
  ReactGA.initialize('UA-138768338-1')
  ReactGA.pageview('/homepage')
}
initializeReactGA()
class App extends React.Component {
  render(){
    return (
      <Router>
        < Navbar />
        <main>

          <Switch>
            <Route exact path="/matter" component={Matter}/>
            <Route exact path="/webgazer" component={WebgazerTone}/>
            <Route exact path="/GenCanA" component={GenCanA}/>
            <Route exact path="/Grids" component={Grids}/>
            <Route exact path="/Bleep" component={Bleep}/>
            <Route exact path="/Beep" component={Bleep}/>
            <Route exact path="/" component={Home} />


          </Switch>
        </main>
      </Router>


    )
  }

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
