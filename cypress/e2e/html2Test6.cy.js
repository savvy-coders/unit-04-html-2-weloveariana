describe('Form validation and submission page', () => {
  beforeEach(() => {
      cy.visit('/index.html');
  });

  it('validates the username field correctly', () => {
      cy.get('input[name="username"]').type('testUser');
      cy.get('input[name="gender"][value="Male"]').click();
      cy.get('select[name="country"]').select('USA');
      cy.get('form[name="myForm"]').submit();

      cy.on('window:alert', (text) => {
          expect(text).to.include('Username: testUser');
      });
  });

  it('validates the gender field correctly', () => {
      cy.get('input[name="username"]').type('testUser');
      cy.get('input[name="gender"][value="Female"]').click();
      cy.get('select[name="country"]').select('Canada');
      cy.get('form[name="myForm"]').submit();

      cy.on('window:alert', (text) => {
          expect(text).to.include('Gender: Female');
      });
  });

  it('validates the country dropdown correctly', () => {
      cy.get('input[name="username"]').type('testUser');
      cy.get('input[name="gender"][value="Male"]').click();
      cy.get('select[name="country"]').select('UK');
      cy.get('form[name="myForm"]').submit();

      cy.on('window:alert', (text) => {
          expect(text).to.include('Country: UK');
      });
  });
});
