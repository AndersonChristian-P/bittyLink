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

      <i class="fas fa-bars fa-2x" onClick={() => handleMenu()}></i>

      {!showMenu ? null :
        <div className="hamburgerMenu">

          <div className="hamburgerMenu_items">
            <ul>
              <Link className="nav_link" to="/" onClick={() => handleMenu()} >
                <li>Home</li>
              </Link>
              <Link className="nav_link" to="#" onClick={() => handleMenu()} >
                <li>Sign Up / Log in</li>
              </Link>
              <li>Logout</li>
            </ul>
          </div>

        </div>
      }

    </div>
  )
}

export default withRouter(Menu)