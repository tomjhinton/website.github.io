import React from 'react'
import ReactDOM from 'react-dom'
import 'bulma'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import ReactGA from 'react-ga';
import './style.scss'


import Home from './components/Home'
import Bleep from './components/Beep'
import Grids from './components/Grids'
import GenCanA from './components/GenCanA'
import WebgazerTone from './components/webgazerTone'





function initializeReactGA() {
  ReactGA.initialize('UA-138768338-1')
  ReactGA.pageview('/homepage')
}

class App extends React.Component {
  render(){
    return (
      <Router>
        <main>

          <Switch>
            <Route path="/webgazer" component={WebgazerTone}/>
            <Route path="/GenCanA" component={GenCanA}/>
            <Route path="/Grids" component={Grids}/>
            <Route path="/Bleep" component={Bleep}/>
            <Route path="/Beep" component={Bleep}/>
            <Route path="/" component={Home} />


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
