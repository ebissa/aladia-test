/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!**********************************!*\
  !*** ./cypress/e2e/signup.cy.js ***!
  \**********************************/


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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDSSxJQUFJLENBQUMsc0JBQXNCLENBQUM7SUFDakVQLEVBQUUsQ0FBQ0csR0FBRyxDQUFDLCtCQUErQixDQUFDLENBQUNJLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDM0RQLEVBQUUsQ0FBQ0csR0FBRyxDQUFDLHVDQUF1QyxDQUFDLENBQUNJLElBQUksQ0FBQyxhQUFhLENBQUM7O0lBRW5FO0lBQ0FQLEVBQUUsQ0FBQ0csR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUNLLEtBQUssQ0FBQyxDQUFDOztJQUV4QztJQUNBUixFQUFFLENBQUNHLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDQyxLQUFLLENBQUMsQ0FBQzs7SUFFMUM7SUFDQUwsRUFBRSxDQUFDUyxHQUFHLENBQUMsQ0FBQyxDQUFDSCxNQUFNLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQztFQUN4QyxDQUFDLENBQUM7QUFDSixDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL251eHQtYXBwLy4vY3lwcmVzcy9lMmUvc2lnbnVwLmN5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImRlc2NyaWJlKCdTaWdudXAgUGFnZScsICgpID0+IHtcbiAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgLy8gVmlzaXQgdGhlIHNpZ251cCBwYWdlIGJlZm9yZSBlYWNoIHRlc3RcbiAgICBjeS52aXNpdCgnL3NpZ251cCcpO1xuICB9KTtcblxuICBpdCgnc2hvdWxkIGRpc3BsYXkgdmFsaWRhdGlvbiBlcnJvcnMgZm9yIGVtcHR5IGZpZWxkcycsICgpID0+IHtcbiAgICAvLyBDbGljayB0aGUgc3VibWl0IGJ1dHRvbiB3aXRob3V0IGZpbGxpbmcgdGhlIGZvcm1cbiAgICBjeS5nZXQoJ2J1dHRvbicpLmNvbnRhaW5zKCdFbnRlcicpLmNsaWNrKCk7XG5cbiAgICAvLyBDaGVjayBmb3IgcmVxdWlyZWQgZmllbGQgdmFsaWRhdGlvbiBtZXNzYWdlc1xuICAgIGN5LmNvbnRhaW5zKCdOYW1lIGlzIHJlcXVpcmVkJykuc2hvdWxkKCdiZS52aXNpYmxlJyk7XG4gICAgY3kuY29udGFpbnMoJ1N1cm5hbWUgaXMgcmVxdWlyZWQnKS5zaG91bGQoJ2JlLnZpc2libGUnKTtcbiAgICBjeS5jb250YWlucygnRW1haWwgaXMgcmVxdWlyZWQnKS5zaG91bGQoJ2JlLnZpc2libGUnKTtcbiAgICBjeS5jb250YWlucygnUGFzc3dvcmQgaXMgcmVxdWlyZWQnKS5zaG91bGQoJ2JlLnZpc2libGUnKTtcbiAgICBjeS5jb250YWlucygnWW91IG11c3QgYWNjZXB0IHRoZSB0ZXJtcyBhbmQgY29uZGl0aW9ucycpLnNob3VsZCgnYmUudmlzaWJsZScpO1xuICB9KTtcbiAgXG5cbiAgaXQoJ3Nob3VsZCB2YWxpZGF0ZSBlbWFpbCBmb3JtYXQnLCAoKSA9PiB7XG4gICAgLy8gRmlsbCBpbiB0aGUgZm9ybSB3aXRoIGludmFsaWQgZW1haWxcbiAgICBjeS5nZXQoJ2lucHV0W3BsYWNlaG9sZGVyPVwiTmFtZVwiXScpLnR5cGUoJ0pvaG4nKTtcbiAgICBjeS5nZXQoJ2lucHV0W3BsYWNlaG9sZGVyPVwiU3VybmFtZVwiXScpLnR5cGUoJ0RvZScpO1xuICAgIGN5LmdldCgnaW5wdXRbcGxhY2Vob2xkZXI9XCJFbWFpbFwiXScpLnR5cGUoJ2ludmFsaWQtZW1haWwnKTtcbiAgICBjeS5nZXQoJ2lucHV0W3BsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIl0nKS50eXBlKCdwYXNzd29yZDEyMycpO1xuICAgIGN5LmdldCgnaW5wdXRbcGxhY2Vob2xkZXI9XCJDb25maXJtIFBhc3N3b3JkXCJdJykudHlwZSgncGFzc3dvcmQxMjMnKTtcblxuICAgIC8vIEFjY2VwdCB0aGUgdGVybXNcbiAgICBjeS5nZXQoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpLmNoZWNrKCk7XG5cbiAgICAvLyBDbGljayB0aGUgc3VibWl0IGJ1dHRvblxuICAgIGN5LmdldCgnYnV0dG9uJykuY29udGFpbnMoJ0VudGVyJykuY2xpY2soKTtcblxuICAgIC8vIENoZWNrIGZvciBlbWFpbCB2YWxpZGF0aW9uIGVycm9yXG4gICAgY3kuY29udGFpbnMoJ0ludmFsaWQgZW1haWwgZm9ybWF0Jykuc2hvdWxkKCdiZS52aXNpYmxlJyk7XG4gIH0pO1xuXG4gIGl0KCdzaG91bGQgdmFsaWRhdGUgcGFzc3dvcmQgbGVuZ3RoJywgKCkgPT4ge1xuICAgIC8vIEZpbGwgaW4gdGhlIGZvcm0gd2l0aCBzaG9ydCBwYXNzd29yZFxuICAgIGN5LmdldCgnaW5wdXRbcGxhY2Vob2xkZXI9XCJOYW1lXCJdJykudHlwZSgnSm9obicpO1xuICAgIGN5LmdldCgnaW5wdXRbcGxhY2Vob2xkZXI9XCJTdXJuYW1lXCJdJykudHlwZSgnRG9lJyk7XG4gICAgY3kuZ2V0KCdpbnB1dFtwbGFjZWhvbGRlcj1cIkVtYWlsXCJdJykudHlwZSgnam9obi5kb2VAZXhhbXBsZS5jb20nKTtcbiAgICBjeS5nZXQoJ2lucHV0W3BsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIl0nKS50eXBlKCcxMjMnKTtcbiAgICBjeS5nZXQoJ2lucHV0W3BsYWNlaG9sZGVyPVwiQ29uZmlybSBQYXNzd29yZFwiXScpLnR5cGUoJzEyMycpO1xuXG4gICAgLy8gQWNjZXB0IHRoZSB0ZXJtc1xuICAgIGN5LmdldCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJykuY2hlY2soKTtcblxuICAgIC8vIENsaWNrIHRoZSBzdWJtaXQgYnV0dG9uXG4gICAgY3kuZ2V0KCdidXR0b24nKS5jb250YWlucygnRW50ZXInKS5jbGljaygpO1xuXG4gICAgLy8gQ2hlY2sgZm9yIHBhc3N3b3JkIHZhbGlkYXRpb24gZXJyb3JcbiAgICBjeS5jb250YWlucygnUGFzc3dvcmQgbXVzdCBiZSBhdCBsZWFzdCA2IGNoYXJhY3RlcnMgbG9uZycpLnNob3VsZCgnYmUudmlzaWJsZScpO1xuICB9KTtcblxuICBpdCgnc2hvdWxkIHNob3cgZXJyb3IgaWYgcGFzc3dvcmRzIGRvIG5vdCBtYXRjaCcsICgpID0+IHtcbiAgICAvLyBGaWxsIGluIHRoZSBmb3JtIHdpdGggbWlzbWF0Y2hlZCBwYXNzd29yZHNcbiAgICBjeS5nZXQoJ2lucHV0W3BsYWNlaG9sZGVyPVwiTmFtZVwiXScpLnR5cGUoJ0pvaG4nKTtcbiAgICBjeS5nZXQoJ2lucHV0W3BsYWNlaG9sZGVyPVwiU3VybmFtZVwiXScpLnR5cGUoJ0RvZScpO1xuICAgIGN5LmdldCgnaW5wdXRbcGxhY2Vob2xkZXI9XCJFbWFpbFwiXScpLnR5cGUoJ2pvaG4uZG9lQGV4YW1wbGUuY29tJyk7XG4gICAgY3kuZ2V0KCdpbnB1dFtwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJdJykudHlwZSgncGFzc3dvcmQxMjMnKTtcbiAgICBjeS5nZXQoJ2lucHV0W3BsYWNlaG9sZGVyPVwiQ29uZmlybSBQYXNzd29yZFwiXScpLnR5cGUoJ2RpZmZlcmVudFBhc3N3b3JkJyk7XG5cbiAgICAvLyBBY2NlcHQgdGhlIHRlcm1zXG4gICAgY3kuZ2V0KCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKS5jaGVjaygpO1xuXG4gICAgLy8gQ2xpY2sgdGhlIHN1Ym1pdCBidXR0b25cbiAgICBjeS5nZXQoJ2J1dHRvbicpLmNvbnRhaW5zKCdFbnRlcicpLmNsaWNrKCk7XG5cbiAgICAvLyBDaGVjayBmb3IgcGFzc3dvcmQgbWlzbWF0Y2ggZXJyb3JcbiAgICBjeS5jb250YWlucygnUGFzc3dvcmRzIGRvIG5vdCBtYXRjaCcpLnNob3VsZCgnYmUudmlzaWJsZScpO1xuICB9KTtcblxuICBpdCgnc2hvdWxkIHJlZGlyZWN0IHRvIHdlbGNvbWUgcGFnZSBvbiBzdWNjZXNzZnVsIHNpZ251cCcsICgpID0+IHtcbiAgICAvLyBGaWxsIGluIHRoZSBmb3JtIHdpdGggdmFsaWQgZGF0YVxuICAgIGN5LmdldCgnaW5wdXRbcGxhY2Vob2xkZXI9XCJOYW1lXCJdJykudHlwZSgnSm9obicpO1xuICAgIGN5LmdldCgnaW5wdXRbcGxhY2Vob2xkZXI9XCJTdXJuYW1lXCJdJykudHlwZSgnRG9lJyk7XG4gICAgY3kuZ2V0KCdpbnB1dFtwbGFjZWhvbGRlcj1cIkVtYWlsXCJdJykudHlwZSgnam9obi5kb2VAZXhhbXBsZS5jb20nKTtcbiAgICBjeS5nZXQoJ2lucHV0W3BsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIl0nKS50eXBlKCdwYXNzd29yZDEyMycpO1xuICAgIGN5LmdldCgnaW5wdXRbcGxhY2Vob2xkZXI9XCJDb25maXJtIFBhc3N3b3JkXCJdJykudHlwZSgncGFzc3dvcmQxMjMnKTtcblxuICAgIC8vIEFjY2VwdCB0aGUgdGVybXNcbiAgICBjeS5nZXQoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpLmNoZWNrKCk7XG5cbiAgICAvLyBDbGljayB0aGUgc3VibWl0IGJ1dHRvblxuICAgIGN5LmdldCgnYnV0dG9uJykuY29udGFpbnMoJ0VudGVyJykuY2xpY2soKTtcblxuICAgIC8vIENoZWNrIGlmIHJlZGlyZWN0ZWQgdG8gd2VsY29tZSBwYWdlXG4gICAgY3kudXJsKCkuc2hvdWxkKCdpbmNsdWRlJywgJy93ZWxjb21lJyk7XG4gIH0pO1xufSk7XG5cblxuIl0sIm5hbWVzIjpbImRlc2NyaWJlIiwiYmVmb3JlRWFjaCIsImN5IiwidmlzaXQiLCJpdCIsImdldCIsImNvbnRhaW5zIiwiY2xpY2siLCJzaG91bGQiLCJ0eXBlIiwiY2hlY2siLCJ1cmwiXSwic291cmNlUm9vdCI6IiJ9