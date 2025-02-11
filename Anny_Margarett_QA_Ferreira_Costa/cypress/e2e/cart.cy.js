describe("Cart", () => {
  it("should make a purchase", () => {
    cy.login();

    cy.get("#tabletsImg").click();

    // Add item to cart
    cy.contains("a.productName", "HP ElitePad 1000 G2 Tablet").click();
    cy.get('button[name="save_to_cart"]').click();

    // Go to cart and checkout
    cy.get("#menuCart").click();
    cy.get("#checkOutButton").click();

    cy.get("#next_btn").click();

    cy.get('input[name="safepay_username"]').click();
    cy.get('input[name="safepay_username"]').clear();
    cy.get('input[name="safepay_username"]').type("carmen123");

    cy.get('input[name="safepay_password"]').click();
    cy.get('input[name="safepay_password"]').clear();
    cy.get('input[name="safepay_password"]').type("Pass123");

    cy.get("#pay_now_btn_SAFEPAY").click();

    cy.get("#orderPaymentSuccess").should("exist");
  });
});
