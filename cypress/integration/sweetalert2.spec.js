//SweetAlert2
//Um Substituto bonito, responsivo, personalizável e acessível para as caixas Pop-up do Javascript


it('deve exibir a mensagem de sucesso no popup', function () {
    cy.visit('https://training-wheels-qaninja.herokuapp.com/sweet_alert')

    cy.contains('button', 'Sucesso').click()

    cy.get('.swal-text')
        .should('have.text', 'Você clicou no botão verde.')
})

it('deve exibir a mensagem de ruim no popup', function () {
    cy.visit('https://training-wheels-qaninja.herokuapp.com/sweet_alert')

    cy.contains('button', 'Deu Ruim').click()

    cy.get('.swal-text')
        .should('have.text', 'Você clicou no botão vermelho.')
})