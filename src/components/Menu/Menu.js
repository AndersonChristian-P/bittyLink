import React, { useState } from "react"
import { Link, withRouter } from "react-router-dom"

const Menu = () => {

  // --STATE-- //
  const [showMenu, setShowMenu] = useState(false)

  // --METHODS-- //
  const handleMenu = () => {
    setShowMenu(!showMenu)
  }

  // --JSX-- //
  return (
    <div>

      <span>
        <Link to="#">Log In</Link>
        <Link to="#">Sign Up</Link>
      </span>

      <span>
        <i class="fas fa-bars fa-2x" onClick={() => handleMenu()}></i>

        {!showMenu ? null :
          <div className="hamburgerMenu">

            <div className="hamburgerMenu_items">
              <ul>
                <Link className="nav_link" to="/" onClick={() => handleMenu()} >
                  <li>Home</li>
                </Link>
                <li>Logout</li>
              </ul>
            </div>

          </div>
        }
      </span>

    </div>
  )
}

export default withRouter(Menu)