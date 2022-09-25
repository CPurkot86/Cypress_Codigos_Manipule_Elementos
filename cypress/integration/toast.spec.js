//Toaster Notificações flutuantes

it('deve exibir uma notificação toast', function () {
    cy.visit('https://training-wheels-qaninja.herokuapp.com/toaster')

    cy.contains('button', 'Toast Rápido').click()

    cy.get('.notification')
        .should('be.visible')
        .should('have.text', 'Essa notificação é muito rápida!')

    //para conseguir identificar o elemento para inpesionar dentro do cypress (congelar alerta)
    // cy.get('body')
    // cy.wait(3000)
})
