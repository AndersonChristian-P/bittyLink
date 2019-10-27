import React, { Component } from "react"
import { Link, withRouter } from "react-router-dom"

class Menu extends Component {

  constructor() {
    super()

    this.state = {
      showMenu: false
    }
  }

  // --METHODS-- //
  handleMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu
    })
  }

  // --JSX-- //
  render() {

    return (
      <div>

        <span>
          <Link to="#">Log In</Link>
          <Link to="#">Sign Up</Link>
        </span>

        <span>
          <i class="fas fa-bars fa-2x" onClick={() => this.handleMenu()}></i>

          {!this.state.showMenu ? null :
            <div className="hamburgerMenu">

              <div className="hamburgerMenu_items">
                <ul>
                  <Link className="nav_link" to="/" onClick={() => this.handleMenu()} >
                    <li>Home</li>
                  </Link>
                  <li>Logout</li>
                </ul>
              </div>

            </div>
          }
        </span>

      </div >
    )
  }
}


export default withRouter(Menu)