describe('Form validation and submission page', () => {
    beforeEach(() => {
      cy.visit('/index.html');
    });
  
    it('has radio buttons for selecting a gender', () => {
      cy.get('input[name=gender]')
        .should('have.length', 3)
        .each(($gender) => {
          expect($gender.val()).to.be.oneOf(['male', 'female', 'other']);
        });
      cy.get('label[for=gender]').should('exist');
    });
});