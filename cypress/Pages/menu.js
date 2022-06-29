class menu {

    elements = {

        titleSpan: () => cy.get('.title'),
        menuOpenBtn: () => cy.get('#react-burger-menu-btn'),
        menuCloseBtn: () => cy.get('#react-burger-cross-btn'),
        menuItem: () => cy.get('.bm-item-list .menu-item'),
        menuNav: () => cy.get('.bm-item-list')


    }

    clickBtnOpenMenu() {
        this.elements.menuOpenBtn().click();
    }

    clickBtnCloseMenu() {
        this.elements.menuCloseBtn().click();
    }

}
module.exports = new menu()