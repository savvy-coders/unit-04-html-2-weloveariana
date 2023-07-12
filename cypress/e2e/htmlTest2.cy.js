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

  it('has checkboxes for selecting favorite fruits', () => {
    cy.get('input[name="fruits"]')
      .should('have.length', 3)
      .each(($fruit) => {
        expect($fruit.val()).to.be.oneOf(['apple', 'banana', 'orange']);
      });
    cy.get('label[for=fruits]').should('exist');
  });

  it('has radio buttons for selecting a gender', () => {
    cy.get('input[name=gender]')
      .should('have.length', 3)
      .each(($gender) => {
        expect($gender.val()).to.be.oneOf(['male', 'female', 'other']);
      });
    cy.get('label[for=gender]').should('exist');
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

  it('has a submit button', () => {
    cy.get('input[type=submit]').should('exist');
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
