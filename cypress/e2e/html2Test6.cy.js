describe('Form validation and submission page', () => {
    beforeEach(() => {
      cy.visit('/index.html');
    });
  
    it('has a submit button', () => {
      cy.get('input[type=submit]').should('exist');
    });
});