class cart {

    elements = {

        addCartItem1: () => cy.get('[data-test="add-to-cart-sauce-labs-backpack"]'),
        addCartItem2: () => cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]'),
        cartQuantity: () => cy.get('.shopping_cart_badge'),
        dltCartItem: () => cy.get('[data-test="remove-sauce-labs-backpack"]'),
        acsCart: () => cy.get('.shopping_cart_link'),
        itemQuantity: () => cy.get('.cart_list [class=cart_item]'),
        btnRemove: () => cy.get('button[class="btn btn_secondary btn_small cart_button"]'),
        btnCheckout: () => cy.get('button[name="checkout"]'),
        firstName: () => cy.get('[data-test="firstName"]'),
        lastName: () => cy.get('[data-test="lastName"]'),
        zipCode: () => cy.get('[data-test="postalCode"]'),
        btnContinue: () => cy.get('[type=submit]'),
        btnFinish: () => cy.get('button[name="finish"]'),
        titleSpan: () => cy.get('.title')

    }

    clickAddCart1() {
        this.elements.addCartItem1().click();
    }

    clickAddCart2() {
        this.elements.addCartItem2().click();
    }

    clickDltCart() {
        this.elements.dltCartItem().click()
    }

    accessCart() {
        this.elements.acsCart().click()
    }
    clickbtnRemove() {
        this.elements.btnRemove().click()
    }

    clickbtnCheckout() {

        this.elements.btnCheckout().click()
    }

    clickbtnContinue() {

        this.elements.btnContinue().click()
    }

    clickbtnFinish() {

        this.elements.btnFinish().click()
    }

    
    list = []

    ItemsCount() {


        this.elements.itemQuantity().each((index) => {
            this.list.push(index)            

        })
                cy.wrap(this.list).as('valItemCart')          

    }

}

module.exports = new cart()