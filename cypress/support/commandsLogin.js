const home = require("../Pages/home")

Cypress.Commands.add('login', (user,pass)=> {

    home.typeUsername(user)
    home.typePassword(pass)
    home.clickLogin()
  })