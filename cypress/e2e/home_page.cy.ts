describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('/'); // change URL to match your dev URL
    cy.get('[alt="next-page"]').click();
    cy.contains('ul', 'SPEAROW');
    cy.get('[alt="previous-page"]').click();
    cy.contains('BULBASAUR').click();
    cy.contains('Weight: 69');
    cy.get('[alt="back-home"]').click();
    cy.contains('BULBASAUR');
  });
});
