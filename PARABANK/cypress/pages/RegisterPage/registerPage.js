Cypress.Commands.add('typeFirstName', (firstName) => {
    cy.get('input[id="customer.firstName"]').type(firstName);
});

Cypress.Commands.add('typeLastName', (lastName) => {
    cy.get('input[id="customer.lastName"]').type(lastName);
});

Cypress.Commands.add('typeAddressStreet', (street) => {
    cy.get('input[id="customer.address.street"]').type(street);
});

Cypress.Commands.add('typeAddressCity', (city) => {
    cy.get('input[id="customer.address.city"]').type(city);
});

Cypress.Commands.add('typeAddressState', (state) => {
    cy.get('input[id="customer.address.state"]').type(state);
});

Cypress.Commands.add('typeAddressZipCode', (zipCode) => {
    cy.get('input[id="customer.address.zipCode"]').type(zipCode);
});

Cypress.Commands.add('typePhoneNumber', (phoneNumber) => {
    cy.get('input[id="customer.phoneNumber"]').type(phoneNumber);
});
      
Cypress.Commands.add('typeSSN', (ssn) => {
    cy.get('input[id="customer.ssn"]').type(ssn);
});      
      
Cypress.Commands.add('typeUsername', (username) => {
    cy.get('input[id="customer.username"]').type(username);
});      
      
Cypress.Commands.add('typePassword', (password) => {
    cy.get('input[id="customer.password"]').type(password);
});
      
Cypress.Commands.add('typeRepeatedPassword', (repeatedPassword) => {
    cy.get('input[id="repeatedPassword"]').type(repeatedPassword);
});      

Cypress.Commands.add('clickRegister', () => {
    cy.get('input[value="Register"]').click();
});