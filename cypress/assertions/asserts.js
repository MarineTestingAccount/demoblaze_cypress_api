import {CartPage} from "../pom/cartPage";

const cartPage = new CartPage();

export class Assertions {
    assertTotalPriceInCart() {
        cartPage.getTotalPriceInCart().should("have.text", "360");
    }
}
