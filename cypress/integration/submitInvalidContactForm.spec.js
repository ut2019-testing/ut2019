describe('submitInvalidContactForm',function () {
    const operations = [
        {
            // Estonian
            contactPage: 'https://ut2019.voog.com/contact-1',
            result: 'Vigane sisend',
            language: "Estonian"

        },
        {
            // English
            contactPage: 'https://ut2019.voog.com/contact',
            result: "Invalid input",
            language: "English"
        }
    ];

    const testing = [
        //you can add your own tests here
        {
            email: ' ',
            name: ' ',
            message: ' '
        },
        {
            email: 'qwe@qwe.com',
            name: 'Tobias',
            message: ' '
        },
        {
            email: 'qwe@qwe.com',
            name: ' ',
            message: 'HALLOOOO'
        },
        {
            email: ' ',
            name: 'Tobias',
            message: 'HALLOOOO'
        },
        {
            email: ' ',
            name: ' ',
            message: 'HALLOOOO'
        },
        {
            email: ' ',
            name: 'Tobias',
            message: ' '
        },
        {
            email: 'qwe@qwe.com',
            name: ' ',
            message: ' '
        }
    ];

    operations.forEach((operation) => {
        it('Invalid '+operation.language+' form submission', function() {
            cy.visit(operation.contactPage);

            testing.forEach((tests) => {
                cy.get('.contact-name input').type(tests.name);
                cy.get('.contact-email input').type(tests.email);
                cy.get('.contact-message textarea').type(tests.message);
                cy.get('input[type="submit"]').click();
                cy.get('.form_error').should('have.text', operation.result);
                cy.get('.contact-name input').clear();
                cy.get('.contact-email input').clear();
                cy.get('.contact-message textarea').clear();
            })
        })
    })

});