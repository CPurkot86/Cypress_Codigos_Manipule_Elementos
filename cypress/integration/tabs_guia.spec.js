//Cypress nunca terá suporte a múltiplas guias! E agora?

//https://docs.cypress.io/guides/references/trade-offs?_gl=1%2aixscbq%2a_ga%2aMTY2ODYzNzM3Mi4xNjU5NDQxODEz%2a_ga_37GXT4VGQK%2aMTY2NDE0MDUyOC40OC4xLjE2NjQxNDI2OTIuMC4wLjA.

it('abrir nova guia', function () {
    cy.visit('https://training-wheels-qaninja.herokuapp.com/new_tab')

    //cy.contains('a', 'Clique aqui').click()

    cy.get('a[href="https://www.google.com.br"]')
        .should('have.attr', 'target', '_blank')

    cy.contains('a', 'Clique aqui').invoke('removeAttr', 'target')

    cy.contains('a', 'Clique aqui').click()

    cy.get('input[name=q]').type('Cypress')
})