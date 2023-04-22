describe('Lead detail', () => {
  it('Sigin to Dashboard', () => {
    cy.visit('/')
    cy.get('#email').type('gregorioescalona@gmail.com')
    cy.get('#password').type('test')
    cy.get('#btn_submit').click()

    cy.contains('dashboard').should('be.visible').then(() => {
      expect(localStorage.getItem('crm-token')).to.exist
    })
  })
})
