describe('ut2019', function() {
    const languages = ['https://ut2019.voog.com/contact', 'https://ut2019.voog.com/contact-1'];
    const reply = ['Invalid input', 'Vigane sisend'];
    it('Submit form unsuccessfully', function() {
        cy.clearCookies();
        for (let i = 0; i < languages.length; i++) {
            cy.visit(languages[i]);
            cy.get('input[type="submit"]').click();
            cy.get('.form_error').should('have.text', reply[i]);
        }
    });
});