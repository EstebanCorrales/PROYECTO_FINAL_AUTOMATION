class inventory {

    elements = {
        openProductBtn: () => cy.get('#item_2_title_link'),
        backProductBtn: () => cy.get('#back-to-products'),
        productTitle: () => cy.get('.title'),
        productContainer: () => cy.get('.product_sort_container'),
        productName: () => cy.get('.inventory_item_name'),
        productPrice2: () => cy.get('.inventory_details_price'),
        productName2: () => cy.get('.inventory_details_name.large_size'),
        productImgName2: () => cy.get('.inventory_details_img'),
        listaProductElements: () => cy.get('.inventory_list .inventory_item'),
        getProductName: (productNames) => cy.get('.inventory_list .inventory_item .inventory_item_name').contains(productNames),
        getProductPrice: (productPrices) => cy.get('.inventory_list .inventory_item .inventory_item_price').contains(productPrices),
        getProductImage: (productImgs) => cy.get('a img').should("have.attr", "src", productImgs),
        getProductStatus: (productsStatus) => cy.get('.pricebar button').contains(productsStatus),
        sortPrice: () => cy.get('.inventory_item_description > .pricebar > .inventory_item_price'),
        urlInventory: () => cy.url()

    }


    clickOpenProductBtn() {
        this.elements.openProductBtn().click()
    }
    clickBackProductBtn() {
        this.elements.backProductBtn().click()
    }


    list = []

    ProductsPrices() {


        this.elements.sortPrice().each(($el) => {

            this.elements.productContainer().select('lohi')

            this.list.push(($el.text().replace('$', '')))


        })
        cy.wrap(this.list).as('orderPrices')

    }



}
module.exports = new inventory()