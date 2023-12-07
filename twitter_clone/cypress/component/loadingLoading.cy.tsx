import React from 'react';
import Loading from '../../src/app/loading';

describe('<Loading />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Loading />);
    cy.get('div').should('exist').and('have.class', 'bg-cyan-800');
  });
});
