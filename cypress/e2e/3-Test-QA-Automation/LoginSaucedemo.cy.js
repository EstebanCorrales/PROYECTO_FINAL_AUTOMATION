const home = require("../../Pages/home")
const inventory = require("../../Pages/inventory")
const credential = require('../../fixtures/credentials.json')


describe("Cypress POM Login Saucedemo", function () {

    beforeEach(function () {
        home.navigate();

    })

    credential.forEach(creden => {

        it(creden.name, {keystrokeDelay: 80}, function () {


            cy.login(creden.username, creden.password)
            if (creden.name === 'User without Password') {
                home.elements.errorMessage().should('have.text', creden.expected)
            }
            if (creden.name === 'Password without User') {

                home.elements.errorMessage().should('have.text', creden.expected)
            }
            if (creden.name === 'User with Incorrect Password') {

                home.elements.errorMessage().should('have.text', creden.expected)
            }
            if (creden.name === 'Correct Username and Password') {

                home.elements.titleSpan().should('have.text', creden.expected)
            }

        });

    });
});
