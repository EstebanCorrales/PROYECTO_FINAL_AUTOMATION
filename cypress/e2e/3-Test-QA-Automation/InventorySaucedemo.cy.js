const home = require("../../Pages/home")
const credential = require('../../fixtures/credentials.json')
const inventory = require("../../pages/inventory")
const productDetails = require('../../fixtures/products.json');
chai.use(require('chai-sorted'))

const username = credential[3].username
const password = credential[3].password

describe('Cypress POM Inventory Saucedemo', () => {

    before(function () {
        home.navigate();
        cy.login(username, password)
    })

    it('Product List', () => {
        inventory.elements.listaProductElements().should('have.length', 6)
    });

    productDetails.forEach(element => {
        it(element.name, function () {

            inventory.elements.getProductName(element.name).should("have.text", element.name)
            inventory.elements.getProductPrice(element.price).should("have.text", element.price)
            inventory.elements.getProductName(element.name).parent().parent().parent().parent().find('a img').should("have.attr", "src", element.imagen)
            inventory.elements.getProductStatus(element.status).should("have.text", element.status)

        });

    });



    it('Order Product Price Low-Higth', () => {
        inventory.ProductsPrices()

        cy.get("@orderPrices").then((list) => {
            expect(list.map(Number)).to.be.sorted
        })

    })

})
