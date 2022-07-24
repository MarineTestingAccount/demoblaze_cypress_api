import {Helper} from "../support/helper";

const helper = new Helper();

export class HomePage {
    openHomePage() {
        cy.visit("/");
    }

    chooseItemRequest() {
        cy.request({
            method: "POST",
            url: "https://api.demoblaze.com/view",
            body: {"id": "1"}
        }).its("body.img").should("be.equal", "imgs/galaxy_s6.jpg");
    }

    addItemToCart() {
        helper.getCookie();
        cy.get('@cookie').then(cookie => {
            cy.request({
                method: "POST",
                url: "https://api.demoblaze.com/addtocart",
                body: {
                    "id": helper.guid(),
                    "cookie": cookie,
                    "prod_id": 1,
                    "flag": false
                }
            }).then((res) => {
                expect(res.status).to.eq(200);
            });
        })
    }

    getCartNavItem() {
        return cy.contains("Cart");
    }

    clickOnCartNavItem() {
        this.getCartNavItem().click();
    }
}
