describe('Form validation and submission page', () => {
    beforeEach(() => {
      cy.visit('/index.html');
    });
  
    it('has a dropdown menu for selecting a country', () => {
      cy.get('select[name=country]')
        .should('exist')
        .children()
        .should('have.length', 4)
        .each(($option, index) => {
          if (index === 0) return;  // Skip the first option (placeholder)
          expect($option.val()).to.be.oneOf(['usa', 'canada', 'uk']);
        });
      cy.get('label[for=country]').should('exist');
    });
});