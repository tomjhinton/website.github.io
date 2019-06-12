import React from 'react'
import ReactDOM from 'react-dom'
import 'bulma'

import './style.scss'


import Home from './components/Home'



class App extends React.Component {
  render(){
    return (

      <main>


        <Home/>



      </main>



    )
  }

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
