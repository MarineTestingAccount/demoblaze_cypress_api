/// <reference types="cypress" />

import {Assertions} from "../../assertions/asserts";
import {HomePage} from "../../pom/homePage";

const homePage = new HomePage();
const assertPage = new Assertions();

describe('Network', () => {
    it('Add item to cart via API calls and assert total Price ', () => {
        cy.intercept('https://hls.demoblaze.com/about_demo_hls_600k00000.ts').as("viewCart");
        homePage.openHomePage();
        homePage.chooseItemRequest();
        homePage.addItemToCart();
        cy.wait("@viewCart");
        homePage.clickOnCartNavItem();
        assertPage.assertTotalPriceInCart();
    });
})
