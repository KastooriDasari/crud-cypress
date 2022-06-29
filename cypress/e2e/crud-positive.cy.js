describe('empty spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })
  it('passes', () => {
  cy.get('#eid').type('5065')
  cy.get('#ename').type('Kastoori')
  cy.get('#eemail').type('kastoori@gmail.com')
  cy.get('#epsw').type('kastoori')
  cy.get('#btn1').click()
  cy.on('window:alert',(a) => {expect(a).to.contains("Do you want to add new record")})
  })
})