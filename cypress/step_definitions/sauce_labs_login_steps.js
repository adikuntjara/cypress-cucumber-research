import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('I am on the Sauce Labs login page', () => {
  cy.visit('https://www.saucedemo.com/');
});

When('I enter valid credentials', () => {
  cy.get('#user-name').type('standard_user');
  cy.get('#password').type('secret_sauce');
});

When('I click the login button', () => {
  cy.get('#login-button').click();
});

Then('I should see the menu button', () => {
  cy.get('#react-burger-menu-btn').should('contain', 'Open Menu');
});

Then('I should be redirected to the inventory page', () => {
  cy.url().should('include', '/inventory.html');
});