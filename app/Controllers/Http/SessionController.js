"use strict"

const User = use("App/Models/User")

class SessionController {
  async store({ request, response, auth }) {
    const { email, password } = request.only(["email", "password"])

    const { token } = await auth.withRefreshToken().attempt(email, password)

    const { id, name } = await User.findBy("email", email)

    return { token, user: { id, name, email } }
  }
}

module.exports = SessionController
