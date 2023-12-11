describe('Home Screen', () => {
  it('should render', () => {
    cy.visit('http://localhost:3000/');
    cy.get('h1').contains('Home');
  });
});
