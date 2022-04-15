/// <reference types ="cypress"/>

it('deve exibir a home page', function () {
    cy.visit('https://training-wheels-protocol.herokuapp.com/')

    cy.title().
        should('eq', 'Training Wheels Protocol')

    cy.get('ul > :nth-child(1) > a')
        .should('be.visible')
})