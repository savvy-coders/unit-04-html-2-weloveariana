describe('Form validation and submission page', () => {
  beforeEach(() => {
    cy.visit('/index.html');
  });

  it('has checkboxes for selecting favorite fruits', () => {
    cy.get('input[name="fruits"]')
      .should('have.length', 3)
      .each(($fruit) => {
        expect($fruit.val()).to.be.oneOf(['apple', 'banana', 'orange']);
      });
    cy.get('label[for=fruits]').should('exist');
  });
});