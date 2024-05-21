// conjunto de testes
describe('Register', () => {
    // teste
    it('Registrar usuario com credenciais validas', () => {
      cy.visit('https://parabank.parasoft.com/parabank/register.htm');

      cy.typeFirstName("Carlos");
      cy.typeLastName("Silva");
      cy.typeAddressStreet("Rua dos Bobos, 0");
      cy.typeAddressCity("Fortaleza");
      cy.typeAddressState("Ceará");
      cy.typeAddressZipCode("6020000");
      cy.typePhoneNumber("88999999999");
      cy.typeSSN("12345678910");

      cy.typeUsername("carlos");
      cy.typePassword("test123");
      cy.typeRepeatedPassword("test123");
      
      cy.clickRegister();
      //cy.get('input[value="Register"]').click();
      //...
      cy.get('p').contains('Your account was created successfully. You are now logged in.').should('be.visible');
    })
  })