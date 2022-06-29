const home = require("../../Pages/home")
const credential = require('../../fixtures/credentials.json')
const cart = require("../../Pages/cart")


const username = credential[3].username
const password = credential[3].password


describe('Cypress POM Cart Saucedemo', () => {

    beforeEach(function () {
        home.navigate();
        cy.login(username, password)
    })

    it('Add to Cart in the Inventory', () => {

        cart.clickAddCart1();
        cart.elements.cartQuantity().should('have.length', 1)
            .and('be.visible')
    });

    it('Remove to Cart in the Inventory', () => {
        cart.clickAddCart1();
        cart.clickDltCart();
        cart.elements.cartQuantity().should('have.length', 0)
            .and('not.exist')

    });



    it('Cart Items Count', () => {
        cart.clickAddCart1(), cart.clickAddCart2();
        cart.accessCart();
        cart.ItemsCount();


        cy.get('@valItemCart').then((list) => {
            cart.elements.cartQuantity().should('have.text', list.length)
                .and('be.visible')
        })

    });


    it('Remove in the Cart', () => {
        cart.clickAddCart1();
        cart.accessCart();
        cart.clickbtnRemove();
        cart.elements.cartQuantity().should('have.length', 0)

        
    });



    it('Cart Transaction Sucess', () => {
        cart.clickAddCart1(), cart.clickAddCart2();
        cart.accessCart()
        cart.clickbtnCheckout();
        cart.elements.firstName().type('Esteban')
        cart.elements.lastName().type('Corrales')
        cart.elements.zipCode().type('30101')
        cart.clickbtnContinue()
        cart.clickbtnFinish()

        cart.elements.titleSpan().should('have.text', 'Checkout: Complete!')
            .and('be.visible')

    });


});