/// <reference types ="cypress"/>

it('dev marcar thor', function(){

    cy.visit('https://training-wheels-qaninja.herokuapp.com/radios')

    cy.get('input[value=thor3]')
        .check()
        .should('be.checked')
    
})