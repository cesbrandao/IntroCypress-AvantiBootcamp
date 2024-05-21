import { usernameGenerate } from "../../support/utils";
import '../../pages/RegisterPage/registerPage.js';

// conjunto de testes
describe('Register', () => {

  const newUsername = usernameGenerate();

  beforeEach(() => {
    cy.visit('https://parabank.parasoft.com/parabank/register.htm');
  });
  // testes
  // it.only = roda apenas os testes .only
  it.only('Registrar usuario com credenciais validas', () => {
    cy.typeFirstName("Carlos");
    cy.typeLastName("Silva");
    cy.typeAddressStreet("Rua dos Bobos, 0");
    cy.typeAddressCity("Fortaleza");
    cy.typeAddressState("Ceará");
    cy.typeAddressZipCode("6020000");
    cy.typePhoneNumber("88999999999");
    cy.typeSSN("12345678910");

    cy.typeUsername(newUsername);
    cy.typePassword("test123");
    cy.typeRepeatedPassword("test123");
      
    cy.clickRegister();

    cy.get('p').contains('Your account was created successfully. You are now logged in.').should('be.visible');
  });

  it.only('Registrar usuario com usename ja cadastrado', () => {
    cy.typeFirstName("Carlos");
    cy.typeLastName("Silva");
    cy.typeAddressStreet("Rua dos Bobos, 0");
    cy.typeAddressCity("Fortaleza");
    cy.typeAddressState("Ceará");
    cy.typeAddressZipCode("6020000");
    cy.typePhoneNumber("88999999999");
    cy.typeSSN("12345678910");

    cy.typeUsername(newUsername);
    cy.typePassword("test123");
    cy.typeRepeatedPassword("test123");
      
    cy.clickRegister();

    cy.get('span[id="customer.username.errors"]').contains('This username already exists.').should('be.visible');
  });

  it('Registrar usuario com senhas diferentes', () => {
    cy.typeFirstName("Carlos");
    cy.typeLastName("Silva");
    cy.typeAddressStreet("Rua dos Bobos, 0");
    cy.typeAddressCity("Fortaleza");
    cy.typeAddressState("Ceará");
    cy.typeAddressZipCode("6020000");
    cy.typePhoneNumber("88999999999");
    cy.typeSSN("12345678910");

    cy.typeUsername(usernameGenerate());
    cy.typePassword("test123");
    cy.typeRepeatedPassword("test321");

    cy.clickRegister();

    //cy.get('span').contains('Passwords did not match.').should('be.visible');
    cy.get('span[id="repeatedPassword.errors"]').contains('Passwords did not match.').should('be.visible');
  });

  it('Registrar usuario sem usarname e com senhas diferentes', () => {
    cy.typeFirstName("Carlos");
    cy.typeLastName("Silva");
    cy.typeAddressStreet("Rua dos Bobos, 0");
    cy.typeAddressCity("Fortaleza");
    cy.typeAddressState("Ceará");
    cy.typeAddressZipCode("6020000");
    //cy.typePhoneNumber("88999999999");
    cy.typePhoneNumber('');
    cy.typeSSN("12345678910");

    cy.typePassword("test123");
    cy.typeRepeatedPassword("test321");

    cy.clickRegister();

    cy.get('span[id="customer.username.errors"]').contains('Username is required.').should('be.visible');
    cy.get('span[id="repeatedPassword.errors"]').contains('Passwords did not match.').should('be.visible');
  });
});