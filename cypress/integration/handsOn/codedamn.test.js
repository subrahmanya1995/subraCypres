/// <reference types="cypress" />

describe('Testing Codedamn',()=>{
    it('Basic Tests on codedamn',()=>{
       // throw new Error('oops');
       cy.visit("https://codedamn.com")
       cy.contains('Learn web development with mentorship, hands-on practice')
       cy.contains('The Perfect Practice').should('have.text','The Perfect Practice Environment')
       //cy.contains('subramnayam')
       //mocha->.should is comming from mocha
       // data-* //this is a node by the browser engine for eg. <img src= ...here src is an attribute
       // data-testid="sddsf" 
       // Way 1
       cy.contains('Start Learning').should('exist')

       // Way 2
       cy.get('.asyncComponent > div > a')

       // Way 3
       cy.get('[data-testid=menutoggle]') 

       //when we use .should it is converted into assertion by default
       //cy.get
       cy.get('div#root').should('exist')
       cy.get('div[id=root]').should('exist')
       cy.get('div#no.root').should('not.exist')

       cy.get('[data-testid=menutoggle]') .should('exist')
       cy.get('[data-testid=menutoggle]') .click()

       //Architecture of cypress -> Advanced section
    })

    it('The Webpage loads, at least',()=>{
        // throw new Error('oops');
        cy.visit("https://codedamn.com")
     })

     //it.only -> will run only this particular test cases in a suite
    //it.only('Open the codedamn in 1280*720 and verifying login page looks good',()=>{
    it('Open the codedamn in 1280*720 and verifying login page looks good',()=>{
        // throw new Error('oops');
        cy.viewport(1280,720) //can control the screen resolution .observe top right corner
        cy.visit("https://codedamn.com")
        cy.contains('Start').should('have.text','Start Learning')
        cy.contains('Sign In').click()
        cy.contains('Login with your credentials').should('exist')
        cy.contains('Go with Google').should('exist')
        cy.contains('Go with Facebook').should('exist')
        cy.contains('Forgot password?').should('exist')
        cy.contains('Register an account').should('exist')
        
     })

     it('The login page links work',()=>{
        // throw new Error('oops');
        cy.viewport(1280,720) //can control the screen resolution .observe top right corner
        cy.visit("https://codedamn.com")
        //sign in page
        cy.contains('Sign In').click()
        //password reset page
        cy.contains('Forgot password?').should('exist')
        cy.contains('Forgot password?').click()
        //verify page url
        cy.url().should('eq','https://codedamn.com/password-reset')
        cy.url().should('include','/password-reset')
        //go back on sign in page
        cy.go('back')

        cy.contains('Register an account').should('exist')
        cy.contains('Register an account').click()
        cy.url().should('include','/register')
        
     })

    // it('Every basic element exist on mobile',()=>{
        // throw new Error('oops');
    //   cy.viewport('iphone-xr')
    //    cy.visit("https://codedamn.com")
    //    cy.contains('Learn web development with mentorship, hands-on practice')
    //    cy.contains('Become Frontend').should('have.text','Become Frontend Web Developer')
        //cy.con
    // })
}) 