describe('Form validation and submission page', () => {
    beforeEach(() => {
      cy.visit('/index.html');
    });
  
    it('handles the form submission correctly', () => {
      // Fill the form with valid values and submit
      cy.get('input[name=username]').type('testuser');
      cy.get('input[name="fruits"]').check('apple');
      cy.get('input[name=gender]').check('male');
      cy.get('select[name=country]').select('usa');
  
      cy.get('form[name=myForm]').submit();
  
      // Check for an alert message
      cy.on('window:alert', (str) => {
        expect(str).to.exist;
      });
    });
  });
  