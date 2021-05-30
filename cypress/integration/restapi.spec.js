///<reference types="cypress"/>
describe('Rest Api testing',()=>{
    it('get',()=>{
        cy.request('https://jsonplaceholder.typicode.com/todos/1')
    })

    it('get status',()=>{
        cy.request('https://jsonplaceholder.typicode.com/todos/1').then((response)=>{
            expect(response.status).equal(200)
    })})

    it('get body',()=>{
        cy.request('https://jsonplaceholder.typicode.com/todos/1').then((response)=>{
            expect(response.body.title).equal('delectus aut autem')
    })})

    it('get body notnull',()=>{
        cy.request('https://jsonplaceholder.typicode.com/todos/1').then((response)=>{
            expect(response.body).to.not.be.null
    })})

    it('get body idlength',()=>{
        cy.request('https://jsonplaceholder.typicode.com/todos/1').then((response)=>{
            expect(response.body.id).to.have.length.equal(1)
    })})

   

    
})