///<reference types="cypress"/>
describe('aaa',()=>{
    it('nagigate to url',()=>{
        cy.visit('https://wordpress.com/log-in')
    })


    it('identify the textbox',()=>{
        cy.get('input[name="usernameOrEmail"]').should('have.value','')

    })

    it('find a tag',()=>{
        cy.contains('a')
        cy.clearLocalStorage();

    })

    it('check length',()=>{
       cy.get('input[name="usernameOrEmail"]').should('have.length',1)
       cy.clearLocalStorage() 
    });

    it('enter username',()=>{
        cy.get('input[name="usernameOrEmail"]').type('supreetph')
        cy.clearLocalStorage() 
     });

     it('button',()=>{
        cy.contains('Continue').click().get('[id=password]').should('exist')
        cy.clearLocalStorage() 
     });
     it('enter password',()=>{
        cy.get('[id=password]').type('hgshgshdglh')
        cy.clearLocalStorage() 
     });
     it('password empty',()=>{
        cy.get('#password').should('have.length.gt',0)
        cy.clearLocalStorage() 
     });

     it('login exists',()=>{
        cy.contains('Log in').should('exist')
        cy.clearLocalStorage() 
     });

 
})