// conjunto de testes
describe('Register', () => {
    // teste
    it('Registrar usuario com credenciais validas', () => {
      cy.visit('https://parabank.parasoft.com/parabank/register.htm');
      cy.get('input[id="customer.firstName"]').type("Carlos");
      cy.get('input[id="customer.lastName"]').type("Silva");
      cy.get('input[id="customer.address.street"]').type("Rua dos Bobos, 0");
      cy.get('input[id="customer.address.city"]').type("Fortaleza");
      cy.get('input[id="customer.address.state"]').type("Ceará");
      cy.get('input[id="customer.address.zipCode"]').type("6020000");
      cy.get('input[id="customer.phoneNumber"]').type("88999999999");
      cy.get('input[id="customer.ssn"]').type("12345678910");

      cy.get('input[id="customer.username"]').type("carlos");
      cy.get('input[id="customer.password"]').type("test123");
      cy.get('input[id="repeatedPassword"]').type("test123");
      
      cy.get('input[value="Register"]').click();
      //...
      cy.get('p').contains('Your account was created successfully. You are now logged in.').should('be.visible');
    })
  })