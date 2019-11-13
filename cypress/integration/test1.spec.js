describe('ut2019', function() {
    const languagesHome = ['https://ut2019.voog.com/en', 'https://ut2019.voog.com/et'];
    const languagesContact = ['https://ut2019.voog.com/contact', 'https://ut2019.voog.com/contact-1']
    const contact = ['a[href="/contact"]', 'a[href="/contact-1"]']
    const home = ['a[href="/en"]', 'a[href="/et"]']
    it('Navigating between the homepage and contacts page', function() {
        cy.clearCookies();
        for (let i = 0; i < languagesHome.length; i++) {
            cy.visit(languagesHome[i]);
            cy.get(contact[i]).click();
            cy.url().should("eq",languagesContact[i]);
        }
    });
});