describe('Form validation and submission page', () => {
  beforeEach(() => {
    cy.visit('/index.html');
  });

  it('has checkboxes for selecting favorite fruits and appropriate labels', () => {
    const fruits = ['apple', 'banana', 'orange'];
    
    fruits.forEach((fruit) => {
      cy.get(`input[name=fruits][value=${fruit}]`)
        .should('exist');
      cy.get(`label[for=${fruit}]`).should('exist');
    });
  });
});
