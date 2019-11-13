//List of different language options
describe('generated from a list', () => {
    const operations = [{
            value: "Estonian",
        },
        {
            value: "English",
        },
    ]
})


describe("ut2019", function() {
    const email = "test.user@ut2019.ee";
    const name = "Test User";
    const message = "Custom message!";
    it("Submit form successfully", function() {
        cy.clearCookies();
        cy.visit("https://ut2019.voog.com/contact");
        cy.get('.menu-language-btn').click();
        cy.get('.menu-language-popover').find('Estonian').click();
        //cy.get('.menu-language-name').find('Estonian').click();
        cy.get(".contact-name input").type(name);
        cy.get(".contact-email input").type(email);
        cy.get(".contact-message textarea").type(message);
        cy.get('input[type="submit"]').click();
        cy.get(".form_notice")
    });
});

describe("ut2019", function() {
    const invalidEmail = "test.@";
    const invalidName = "1234";
    const invalidMessage = " ";
    it("Submit ivalid form", function() {
        cy.clearCookies();
        cy.visit("https://ut2019.voog.com/contact");
        cy.get(".contact-name input").type(invalidName);
        cy.get(".contact-email input").type(invalidEmail);
        cy.get(".contact-message textarea").type(invalidMessage);
        cy.get('input[type="submit"]').click();
        cy.get('.form_error');
    });
});

describe("ut2019", function() {
    it("Navigate between homepage and contacts page", function() {
        cy.clearCookies();
        cy.visit("https://ut2019.voog.com/contact");
        cy.get(".menu-main__list > :nth-child(1) > a").click();
        cy.get(".menu-main__list > :nth-child(2) > a").click();
    });
});