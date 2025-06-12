describe('Signup Page', () => {
  beforeEach(() => {
    // Visit the signup page before each test
    cy.visit('/signup');
  });

  it('should display validation errors for empty fields', () => {
    // Click the submit button without filling the form
    cy.get('button').contains('Enter').click();

    // Check for required field validation messages
    cy.contains('Name is required').should('be.visible');
    cy.contains('Surname is required').should('be.visible');
    cy.contains('Email is required').should('be.visible');
    cy.contains('Password is required').should('be.visible');
    cy.contains('You must accept the terms and conditions').should('be.visible');
  });
  

  it('should validate email format', () => {
    // Fill in the form with invalid email
    cy.get('input[placeholder="Name"]').type('John');
    cy.get('input[placeholder="Surname"]').type('Doe');
    cy.get('input[placeholder="Email"]').type('invalid-email');
    cy.get('input[placeholder="Password"]').type('password123');
    cy.get('input[placeholder="Confirm Password"]').type('password123');

    // Accept the terms
    cy.get('input[type="checkbox"]').check();

    // Click the submit button
    cy.get('button').contains('Enter').click();

    // Check for email validation error
    cy.contains('Invalid email format').should('be.visible');
  });

  it('should validate password length', () => {
    // Fill in the form with short password
    cy.get('input[placeholder="Name"]').type('John');
    cy.get('input[placeholder="Surname"]').type('Doe');
    cy.get('input[placeholder="Email"]').type('john.doe@example.com');
    cy.get('input[placeholder="Password"]').type('123');
    cy.get('input[placeholder="Confirm Password"]').type('123');

    // Accept the terms
    cy.get('input[type="checkbox"]').check();

    // Click the submit button
    cy.get('button').contains('Enter').click();

    // Check for password validation error
    cy.contains('Password must be at least 6 characters long').should('be.visible');
  });

  it('should show error if passwords do not match', () => {
    // Fill in the form with mismatched passwords
    cy.get('input[placeholder="Name"]').type('John');
    cy.get('input[placeholder="Surname"]').type('Doe');
    cy.get('input[placeholder="Email"]').type('john.doe@example.com');
    cy.get('input[placeholder="Password"]').type('password123');
    cy.get('input[placeholder="Confirm Password"]').type('differentPassword');

    // Accept the terms
    cy.get('input[type="checkbox"]').check();

    // Click the submit button
    cy.get('button').contains('Enter').click();

    // Check for password mismatch error
    cy.contains('Passwords do not match').should('be.visible');
  });

  it('should redirect to welcome page on successful signup', () => {
    // Fill in the form with valid data
    cy.get('input[placeholder="Name"]').type('John');
    cy.get('input[placeholder="Surname"]').type('Doe');
    cy.get('input[placeholder="Email"]').type('john.doe@example.com');
    cy.get('input[placeholder="Password"]').type('password123');
    cy.get('input[placeholder="Confirm Password"]').type('password123');

    // Accept the terms
    cy.get('input[type="checkbox"]').check();

    // Click the submit button
    cy.get('button').contains('Enter').click();

    // Check if redirected to welcome page
    cy.url().should('include', '/welcome');
  });
});


