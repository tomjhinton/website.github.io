import React from 'react'
import ReactDOM from 'react-dom'
import 'bulma'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'

import './style.scss'


import Home from './components/Home'
import Test from './components/Test'


class App extends React.Component {
  render(){
    return (
      <Router basename='/'>
        <main>

          <Switch>
            <Route path="/" component={Home} />
            <Route path="/test" component={Test} />

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
