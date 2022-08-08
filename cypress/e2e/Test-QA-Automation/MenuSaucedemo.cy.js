const home = require ("../../Pages/home")
const menus = require ("../../Pages/menu")
const credential = require('../../fixtures/credentials.json')
const menu = require('../../fixtures/menu.json')

const username = credential[3].username
const password = credential[3].password

describe('Cypress POM Menu Saucedemo', () => {

    beforeEach(function () {
        home.navigate();
        cy.login(username, password)
    })

    it('Menu Options', () => {

        menus.clickBtnOpenMenu();
        const menuList = menu

        menus.elements.menuItem().each((myMenu, index, list) => {
            cy.log(myMenu.text())
            cy.wrap(myMenu).invoke('text').then((MenuOp) => {
                expect(MenuOp).to.contain(menuList[index])
            })

        });
    })

    it('Open & close Menu', () => {
        menus.clickBtnOpenMenu();
        menus.elements.menuNav().should('be.visible', '.bm-item-list')
        menus.clickBtnCloseMenu();
        menus.elements.menuNav().should('not.be.visible', '.bm-item-list')

    });


})


