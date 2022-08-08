const home = require("../../pages/home")
const inventory = require("../../pages/inventory")
const productDetails = require('../../fixtures/products.json');
const fixtCredential = require('../../fixtures/credentials.json');

const username = fixtCredential[3].username
const password = fixtCredential[3].password

describe('Cypress POM Products Saucedemo', () => {

    beforeEach(function () {
        home.navigate();
        cy.login(username, password)
    })

    it('Products Details(imagen,nombre,precio)', () => {
        inventory.clickOpenProductBtn();

        //imagen
        inventory.elements.productImgName2().should('be.visible').and("have.attr", "src", productDetails[2].imagen)

        //nombre
        inventory.elements.productName2().invoke('text').then((text) => {
            expect(text).to.equal(productDetails[2].name)
        })
        //price
        inventory.elements.productPrice2().invoke('text').then((price) => {
            expect(price).to.equal(productDetails[2].price)
        })

    })


    it('Back to Products Button', () => {
        inventory.clickOpenProductBtn();
        inventory.clickBackProductBtn();
        inventory.elements.urlInventory().should('eq', 'https://www.saucedemo.com/inventory.html')

    });


})