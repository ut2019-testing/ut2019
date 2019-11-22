describe('ut2019', function() {
  	const email = 'test.user@ut2019.ee';
	const name = 'Test User';
	const message = 'Custom message!';
	const urls = ['https://ut2019.voog.com/contact', 'https://ut2019.voog.com/contact-1'];
	var ok_msg = ["Thank you!","Aitäh!"];
	var err_msg = ["Invalid input", "Vigane sisend"];
	var x = 0; // index for correct message list
	var y = 0; // index for error message list
	urls.forEach((url) => {
		it('Submit form successfully', function() {
			cy.clearCookies();			
			cy.visit(url);			
			cy.get('.contact-name input').type(name);
			cy.get('.contact-email input').type(email);
			cy.get('.contact-message textarea').type(message);
			cy.get('input[type="submit"]').click();
			cy.get('.form_notice').should('have.text', ok_msg[x]);
			x += 1;
		});
		it('Submit form unsuccessfully', function() {
			cy.clearCookies();
			cy.visit(url);
			cy.get('.contact-name input').type(' ');
			cy.get('.contact-email input').type(' ');
			cy.get('.contact-message textarea').type(' ');
			cy.get('input[type="submit"]').click();
			cy.get('.form_error').should('have.text', err_msg[y]);
			y += 1;
		});
    	})
})