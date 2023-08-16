describe('Form validation and submission page', () => {
    beforeEach(() => {
      cy.visit('/index.html');
    });
  
    it('has a text field for entering a username with correct placeholder', () => {
      cy.get('input[name=username]')
        .should('exist')
        .and('have.attr', 'placeholder', 'Enter your username');
      cy.get('label[for=username]').should('exist');
    });
});