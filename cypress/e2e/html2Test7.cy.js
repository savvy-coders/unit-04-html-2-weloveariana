describe('Form validation and submission page', () => {
  beforeEach(() => {
    cy.visit('/index.html');
  });

  // This test checks if the form handles submissions correctly and displays an alert with the selected values.
  it('displays an alert with selected form values upon submission', () => {
    // Intercept window alerts
    cy.window().then((win) => {
      cy.stub(win, 'alert').callsFake((msg) => {
        // Check the content of the alert message
        expect(msg).to.include('username:');
        expect(msg).to.include('fruits:');
        expect(msg).to.include('gender:');
        expect(msg).to.include('country:');
        // Add more detailed checks if needed, based on form values
      }).as('windowAlert');
    });

    // Fill the form (this is a sample, adjust based on the form structure)
    cy.get('input[name=username]').type('TestUser');
    cy.get('input[name=fruits][value=apple]').check();
    cy.get('input[name=gender][value=male]').check();
    cy.get('select[name=country]').select('usa');

    cy.get('form[name=myForm]').submit();

    // Check if the alert was triggered
    cy.get('@windowAlert').should('have.been.calledOnce');
  });
});
