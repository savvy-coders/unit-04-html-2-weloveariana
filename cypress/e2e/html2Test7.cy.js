describe('Form validation and submission page', () => {
    beforeEach(() => {
      cy.visit('/index.html');
    });
  
    it('validates the form fields correctly', () => {
      // Fill the form with invalid values and submit
      cy.get('input[name=username]').clear();
      cy.get('select[name=country]').select('');
  
      cy.get('form[name=myForm]').submit();
  
      // Check for an alert message
      cy.on('window:alert', (str) => {
        expect(str).to.exist;
      });
    });
});