describe('Form validation and submission page', () => {
    beforeEach(() => {
      cy.visit('/index.html');
    });

    it('has radio buttons for selecting a gender and appropriate labels', () => {
      const genders = ['male', 'female', 'other'];

      genders.forEach((gender) => {
        cy.get(`input[name=gender][value=${gender}]`)
          .should('exist');
        cy.get(`label[for=${gender}]`).should('exist');
      });
    });
});
