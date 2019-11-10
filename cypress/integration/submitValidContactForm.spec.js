describe('submitValidContactForm', function() {

    const operations = [
        {
            // Estonian
            contactPage: 'https://ut2019.voog.com/contact-1',
            result: 'Aitäh!',
            language: "Estonian"

        },
        {
            // English
            contactPage: 'https://ut2019.voog.com/contact',
            result: "Thank you!",
            language: "English"
        }
    ];

    const testing = [
        //you can add your own tests here
        {
            email: 'test.user@ut2019.ee',
            name: 'Test User',
            message: 'Custom message!'
        }
    ];

    operations.forEach((operation) => {
        it('Submitted '+operation.language+' form successfully', function() {
            cy.visit(operation.contactPage);

            testing.forEach((tests) => {
                cy.get('.contact-name input').type(tests.name);
                cy.get('.contact-email input').type(tests.email);
                cy.get('.contact-message textarea').type(tests.message);
                cy.get('input[type="submit"]').click();
                cy.get('.form_notice').should('have.text', operation.result);
            })
        })
    })
});