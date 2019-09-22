const bcrypt = require("bcryptjs")

module.exports = {

  register: async (req, res) => {
    const db = req.app.get("db")
    const { firstname, lastname, email, password } = req.body
    const { session } = req

    // check if email has been used
    let emailTaken = await db.checkEmail({ email })
    emailTaken = +emailTaken[0].count

    if (emailTaken !== 0) {
      return res.sendStatus(409)
    }
    // on client side if res.status === 409 then alert('sorry the email has already been used')

    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt)

    const user = await db.userRegistration({
      firstname,
      lastname,
      email,
      hash // we don't save the actual password provided by user
    })

    session.user = {
      email,
      user_id: user[0].bittylink_login_id
    }

    res.status(200).send({
      authenticated: true, // used for conditional formatting on client-side
      email: user[0].email,
      firstname: user[0].firstname,
      lastname: user[0].lastname,
      user_id: user[0].bittylink_login_id
    })
    // really consider what you want to put on session and on the reducer
  },

  login: async (req, res) => {
    const db = req.app.get("db")
    const { session } = req
    const { loginEmail, loginPassword } = req.body

    try {
      let user = await db.login({ loginEmail })

      const authenticated = bcrypt.compareSync(loginPassword, user[0].password)

      if (authenticated) {

        session.user = {
          authenticated: true,
          email: user[0].email,
          user_id: user[0].bittylink_login_id,
          firstname: user[0].firstname,
          lastname: user[0].lastname
        }

        res.status(200).send({
          authenticated,
          email: user[0].email,
          user_id: user[0].bittylink_login_id,
          firstname: user[0].firstname,
          lastname: user[0].lastname
        })
      } else {
        throw new Error(401)
      }
    } catch (err) {
      res.sendStatus(401)
    }
  }
}