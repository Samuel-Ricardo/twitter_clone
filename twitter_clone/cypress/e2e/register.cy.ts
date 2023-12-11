describe('[E2E] | Register => [USER]', () => {
  it('[1/3] | should render login', () => {
    cy.visit('http://localhost:3000');
    cy.get('div').should(
      'have.class',
      'bg-gradient-to-br from-gray-100 to-gray-400/90 shadow-[-5px_5px_20px_0px] shadow-cyan-500/50',
    );
    cy.get('div').get('h3').contains('Login');
    cy.get('div').get('input').should('have.length', 3);
  });
});
