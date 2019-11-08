describe('navigateHomeAndContactsPages', function() {

    const operations = [
        {
            // Estonian
            homePage: 'https://ut2019.voog.com/et',
            contactPage: 'https://ut2019.voog.com/contact-1'

        },
        {
            // English
            homePage: 'https://ut2019.voog.com/en',
            contactPage: 'https://ut2019.voog.com/contact'
        }
    ];

    operations.forEach((operation) => {
        it('Navigated successfully', function() {
            cy.visit(operation.homePage);

            cy.visit(operation.contactPage);
            cy.url().should('eq', operation.contactPage);
            cy.visit(operation.homePage);
            cy.url().should('eq', operation.homePage);
        })
    })
});
