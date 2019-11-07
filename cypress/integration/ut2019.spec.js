describe('ut2019', function() {
	const email = 'test.user@ut2019.ee';
	const name = 'Martin Aun';
	const message = 'Custom message!';
	it('Submit form successfully', function() {
		cy.visit('https://ut2019.voog.com/contact');
		cy.get('.contact-name input').type(name);
		cy.get('.contact-email input').type(email);
		cy.get('.contact-message textarea').type(message);
		cy.get('input[type="submit"]').click();
		cy.get('.form_notice').should('have.text', 'Thank you!');
	});
});
