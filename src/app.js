import React from 'react'
import ReactDOM from 'react-dom'
import 'bulma'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'

import './style.scss'


import Home from './components/Home'
import Bleep from './components/Beep'
import Grids from './components/Grids'
import GenCanA from './components/GenCanA'


class App extends React.Component {
  render(){
    return (
      <Router>
        <main>

          <Switch>
            <Route path="/GenCanA" component={GenCanA}/>
            <Route path="/Grids" component={Grids}/>
            <Route path="/Bleep" component={Bleep}/>
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
