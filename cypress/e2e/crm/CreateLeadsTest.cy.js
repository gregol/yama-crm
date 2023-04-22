describe('Create Leads', () => {
  it('Create Leads', () => {
    cy.visit('/leads/create')
    cy.get('#name').type('First Lead')
    cy.get('#email').type('first@gmail.com')
    cy.get('#phone').type('1234567890')
    cy.get('#company').type('First Company')
    cy.get('#message').type('This is the first lead')
    cy.get('#status').type('contacted')
    cy.get('#btn_submit').click()


    // cy.contains('dashboard').should('be.visible').then(() => {
    //   expect(localStorage.getItem('crm-token')).to.exist
    // })
  })
})