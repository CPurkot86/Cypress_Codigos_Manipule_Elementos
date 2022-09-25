//Alerts, Confirm e Prompt Javascript Alert Popup
//São funcões em javascript que exibem caixas Pop-up nativos no Navegador :/


it('deve exibir uma mensagem de Alerta', function () {
    cy.visit('https://training-wheels-qaninja.herokuapp.com/javascript_alerts')


    cy.contains('button', 'Alerta').click()

    //esta função é tipo ouvinte para buscar uma ação no javascript
    cy.on('window:alert', function (result) {
        expect(result).to.equal('Isto é uma mensagem de alerta')

    })

})

//Javascript Confirm Popup
it('deve confirmar a solicitação', function () {
    cy.visit('https://training-wheels-qaninja.herokuapp.com/javascript_alerts')

    cy.contains('button', 'Confirma').click()

    cy.on('window:confirm', () => true)

    cy.get('#result').should('have.text', 'Mensagem confirmada')
})

it('deve cancelar a solicitação', function () {
    cy.visit('https://training-wheels-qaninja.herokuapp.com/javascript_alerts')

    cy.contains('button', 'Confirma').click()

    cy.on('window:confirm', () => false)

    cy.get('#result').should('have.text', 'Mensagem não confirmada')
})

//Javascript Prompt Popup com **Stubs**
it('deve exibir mensagem de boas vindas com o meu nome', function () {
    cy.visit('https://training-wheels-qaninja.herokuapp.com/javascript_alerts')

    cy.window().then(function ($win) {
        cy.stub($win, 'prompt').returns('Cleverson')
        cy.contains('button', 'Prompt').click()
    })

    cy.get('#result').should('have.text', 'Olá, Cleverson')
})
