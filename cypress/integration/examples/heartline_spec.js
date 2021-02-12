describe('test', function () {
    it('test to see if cypress working', function() {
        expect(true).to.equal(true)
    })
})

describe('The Home Page', () => {
    it('successfully loads', () => {
      cy.visit('http://localhost:3001')
    })
  })


describe('go on signup from landing', function() {
    it('visits signup and tests username', function() {
        cy.visit('http://localhost:3001')

        cy.contains('SignUp').click()

        cy.url().should('include', '/SignUp')

        cy.get('username')
        .type('mark1241413passpass1123')
        .should('have.value', 'mark1241413passpass1123')
    })
})

describe('go on signin from landing', function() {
    it('visits signin and tests username', function() {
        cy.visit('http://localhost:3001')

        cy.contains('SignIn').click()

        cy.url().should('include', '/SignIn')

        cy.get('username')
        .type('mark1241413passpass1123')
        .should('have.value', 'mark1241413passpass1123')
    })
})

describe('The Login Page', () => {
    it('sets auth cookie when logging in via form submission', function () {
      const { username, password } = this.currentUser
  
      cy.visit('/SignIn')
  
      cy.get('input[name=username]').type(username)
  
      cy.get('input[name=password]').type(`${password}{enter}`)

      cy.url().should('include', '/Home')
  
      cy.getCookie('your-session-cookie').should('exist')
  
      cy.get('h1').should('exist')
    })
  })


describe('signing out', () => {
    it('signs in and out', function () {
        const { username, password } = this.currentUser

        cy.visit('/SignIn')
  
        cy.get('input[name=username]').type(username)
    
        cy.get('input[name=password]').type(`${password}{enter}`)
  
        cy.url().should('include', '/Home')
    
        cy.getCookie('your-session-cookie').should('exist')

        cy.contains('Buton').click()
        expect('your-session-cookie').to.equal(false)
    })
})

