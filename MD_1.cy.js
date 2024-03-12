describe('DemoQA', () => {
  

  it('passes', () => {
    cy.visit(' https://demoqa.com/selectable')
    cy.get("a#demo-tab-grid").click()
    
    cy.get('#row1 > .list-group-item').contains('Two').click();
    cy.get('#row2 > .list-group-item').contains('Four').click();
    cy.get('#row2 > .list-group-item').contains('Six').click();
    cy.get('#row3 > .list-group-item').contains('Eight').click();

    // Step d: Pārbauda ka 2, 4, 6 un 8 ir izcelti
    cy.get('#row1 > .list-group-item').contains('Two').should('have.class', 'active');
    cy.get('#row2 > .list-group-item').contains('Four').should('have.class', 'active');
    cy.get('#row2 > .list-group-item').contains('Six').should('have.class', 'active');
    cy.get('#row3 > .list-group-item').contains('Eight').should('have.class', 'active');

    // Pārbauda ka 1, 3, 5, 7 un 9 nav izcelti
    cy.get('#row1 > .list-group-item').contains('One').should('not.have.class', 'active');
    cy.get('#row1 > .list-group-item').contains('Three').should('not.have.class', 'active');
    cy.get('#row2 > .list-group-item').contains('Five').should('not.have.class', 'active');
    cy.get('#row3 > .list-group-item').contains('Seven').should('not.have.class', 'active');
    cy.get('#row3 > .list-group-item').contains('Nine').should('not.have.class', 'active');
  })
})
