import React from 'react'
import { Link, withRouter } from 'react-router-dom'



class Navbar extends React.Component{

  constructor(props){
    super(props)
    this.state ={ active: false}
    this.toggleActive = this.toggleActive.bind(this)

  }


  toggleActive() {
    this.setState({ active: !this.state.active })
  }

  componentDidUpdate(prevProps) {
    if(prevProps.location.pathname !== this.props.location.pathname) {
      this.setState({ active: false })
    }
  }
  render(){
    return(

      <nav className="navbar spin">
        <div className="navbar-brand">
          <Link to="/" className="logo is-size-1">Portfolio</Link>
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


          Sketchbook...
            <div className="navbar-end">

              <Link to="/grids" className="navbar-item spin">Grids</Link>
              <Link to="/webgazer" className="navbar-item spin">glanceSynth</Link>
              <Link to="/GencanA" className="navbar-item">GenCanA</Link>
              <Link to="/Bleep" className={'navbar-item spin'}>Bleep</Link>
              <Link to="/GenCom" className={'navbar-item spin'}>GenCom</Link>

            </div>
          </div>
        </div>
      </nav>

    )
  }
}

export default withRouter(Navbar)
