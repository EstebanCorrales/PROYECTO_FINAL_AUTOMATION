class login {

    navigate() {
        cy.visit('https://www.saucedemo.com/')
    }

    elements = {
    
        usernameInput: () => cy.get('#user-name'),
        passwordInput: () => cy.get('#password'),
        loginBtn: () => cy.get('#login-button'),
        errorMessage: () => cy.get('h3[data-test="error"]'),
        titleSpan: () => cy.get('.title')
    
    
    }
    
    typeUsername(username) {
        this.elements.usernameInput().type(username);
    }
    
    typePassword(password) {
        this.elements.passwordInput().type(password);
    }
    
    clickLogin() {
        this.elements.loginBtn().click();
    }
   
    
}

module.exports = new login()