describe('Sauce Labs Demo login', () => {
  it('should log in with valid credentials', () => {  
    cy.visit('https://www.saucedemo.com/');
    cy.get('#user-name').type('standard_user');  
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();


    //assertion
    cy.get('#react-burger-menu-btn').should('contain', 'Open Menu');

    cy.url().should('include', '/inventory.html');
  });
});
