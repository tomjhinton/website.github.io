import React from 'react'
import { Link, withRouter } from 'react-router-dom'



class Navbar extends React.Component{

  constructor(props){
    super(props)
    this.state ={ active: false}

  }


  toggleActive() {
    this.setState({ active: !this.state.active })
  }

  componentDidUpdate() {

  }
  render(){
    return(

      <nav className="navbar">
        <div className="navbar-brand">
          <Link to="/" className="logo is-size-4">Tom Hinton</Link>
          <a role="button"
            className={`navbar-burger${this.state.active ? ' is-active' : ''}`} onClick={this.toggleActive}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div className={`navbar-menu${this.state.active ? ' is-active' : ''}`}>
          <div className="navbar-start">


          </div>

          <div className="navbar-start">



            <div className="navbar-end">
              <Link to="/grids" className="navbar-item">Grids</Link>
              <Link to="/webgazer" className="navbar-item">Webgazer</Link>
              <Link to="/GencanA" className="navbar-item">GenCanA</Link>
              <Link to="/Bleep" className={'navbar-item'}>Bleep</Link>

            </div>
          </div>
        </div>
      </nav>

    )
  }
}

export default withRouter(Navbar)
