import { VALID_USER_DATA } from '../mock/data/user';

describe('[E2E] | Register => [USER]', () => {
  it('[1/3] | should: render [modal] => [LOGIN]', () => {
    cy.visit('http://localhost:3000');
    cy.get('div').should(
      'have.class',
      'bg-gradient-to-br from-gray-100 to-gray-400/90 shadow-[-5px_5px_20px_0px] shadow-cyan-500/50',
    );
    cy.get('div').get('h3').contains('Login');
    cy.get('div').get('input').should('have.length', 3);
  });

  it('[2/3] | should: navigate to [modal] => [REGISTER]', () => {
    cy.visit('http://localhost:3000');
    cy.get('div').get('h3').contains('Login');

    cy.get('div')
      .get('span')
      .should(
        'have.class',
        'text-cyan-500 font-semibold cursor-pointer hover:underline hover:text-cyan-400 transition',
      )
      .contains('Register Now! :D')
      .click();

    cy.get('div').get('h3').contains('Register');
  });

  it('[3/3] | should: register => [USER]', () => {
    cy.visit('http://localhost:3000');

    cy.get('div')
      .get('span')
      .should(
        'have.class',
        'text-cyan-500 font-semibold cursor-pointer hover:underline hover:text-cyan-400 transition',
      )
      .contains('Register Now! :D')
      .click();

    cy.get('div').get('h3').contains('Register');

    cy.get('input')
      .get('[placeholder="Email"]')
      .should('have.attr', 'placeholder', 'Email')
      .click()
      .type(VALID_USER_DATA.email);

    cy.get('input')
      .get('[placeholder="Name"]')
      .should('have.attr', 'placeholder', 'Name')
      .click()
      .type(VALID_USER_DATA.name);

    cy.get('input')
      .get('[placeholder="Username"]')
      .should('have.attr', 'placeholder', 'Username')
      .click()
      .type(VALID_USER_DATA.username);

    cy.get('input')
      .get('[placeholder="Password"]')
      .should('have.attr', 'placeholder', 'Password')
      .click()
      .type(VALID_USER_DATA.password);

    cy.get('form').submit();

    cy.contains('Successfully toasted! :D');
  });

  it('[ERROR] | should: not [register] => [USER]', () => {
    cy.visit('http://localhost:3000');

    cy.get('div')
      .get('span')
      .should(
        'have.class',
        'text-cyan-500 font-semibold cursor-pointer hover:underline hover:text-cyan-400 transition',
      )
      .contains('Register Now! :D')
      .click();

    cy.get('div').get('h3').contains('Register');

    cy.get('input')
      .get('[placeholder="Email"]')
      .should('have.attr', 'placeholder', 'Email')
      .click()
      .type('fail');

    cy.get('input')
      .get('[placeholder="Name"]')
      .should('have.attr', 'placeholder', 'Name')
      .click()
      .type('1');

    cy.get('input')
      .get('[placeholder="Username"]')
      .should('have.attr', 'placeholder', 'Username')
      .click();

    cy.get('input')
      .get('[placeholder="Password"]')
      .should('have.attr', 'placeholder', 'Password')
      .click()
      .type('1');

    cy.get('form').submit();

    cy.get('p')
      .should('have.class', 'text-red-500 font-semibold text-sm')
      .contains('Please enter a valid email');
    cy.get('p')
      .should('have.class', 'text-red-500 font-semibold text-sm')
      .contains('Name must be at least 3 characters');
    cy.get('p')
      .should('have.class', 'text-red-500 font-semibold text-sm')
      .contains("Username can't be empty");
    cy.get('p')
      .should('have.class', 'text-red-500 font-semibold text-sm')
      .contains('Password must be at least 6 characters');
  });
});
