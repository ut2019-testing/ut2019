describe('ut2019', function() {
	const email = 'test.user@ut2019.ee';
	const name = 'Test User';
	const message = 'Custom message!';
	const languages = ['https://ut2019.voog.com/contact', 'https://ut2019.voog.com/contact-1'];
	const reply = ['Thank you!', 'Aitäh!'];
	it('Submit form successfully', function() {
		cy.clearCookies();
		for (let i = 0; i < languages.length; i++) {
			cy.visit(languages[i]);
			cy.get('.contact-name input').type(name);
			cy.get('.contact-email input').type(email);
			cy.get('.contact-message textarea').type(message);
			cy.get('input[type="submit"]').click();
			cy.get('.form_notice').should('have.text', reply[i]);
		}
	});
});
