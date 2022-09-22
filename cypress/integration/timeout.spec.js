


it('exemplo de time out', function () {
    cy.visit('https://training-wheels-qaninja.herokuapp.com/timeout')

    cy.contains('button', 'Habilita').click()

    cy.get('#firstname')
        .should('be.visible')
        .type('Cleverson', { timeout: 7000 })

})