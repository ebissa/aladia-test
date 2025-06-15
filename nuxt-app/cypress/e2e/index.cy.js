// cypress/e2e/index.spec.js

describe('Index Page Tests', () => {
  beforeEach(() => {
    cy.visit('/'); // Adjust the URL if necessary
  });

  it('displays an error message for invalid email', () => {
    // Enter an invalid email
    cy.get('input[placeholder="Email"]').type('invalid-email');
    
    // Click the Enter button
    cy.get('button').contains('Enter').click();
    
    // Verify that the error message is displayed
    cy.get('.text-red-500').should('contain', 'Please enter a valid email address');
  });

  it('navigates to signup page on valid email submission', () => {
    // Enter a valid email
    cy.get('input[placeholder="Email"]').type('test@example.com');
    
    // Click the Enter button
    cy.get('button').contains('Enter').click();
    
    // Verify that the URL has changed to /signup
    cy.url().should('include', '/signup');
  });

  it('displays no error message for a valid email', () => {
    // Enter a valid email
    cy.get('input[placeholder="Email"]').type('test@example.com');
    
    // Click the Enter button
    cy.get('button').contains('Enter').click();
    
    // Verify that no error message is displayed
    cy.get('.text-red-500').should('not.exist');
  });
});
