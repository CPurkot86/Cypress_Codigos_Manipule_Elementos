//Validações em Tabelas

it('deve exibir 7 séries no total', function () {
    cy.visit('https://training-wheels-qaninja.herokuapp.com/tables')

    cy.get('table tbody tr')
        .then(function (series) {
            expect(series).to.have.length(7)
            //console.log(series)
        })
})

it('deve exibir a série loki', function () {
    cy.visit('https://training-wheels-qaninja.herokuapp.com/tables')

    cy.contains('table tbody tr', 'Loki')
        .then(function (item) {
            expect(item).to.contain('Marvel')
            expect(item).to.contain('Disney+')
            expect(item).to.contain('2021')
        })
})

it('deve remover a série round 6', function () {
    cy.visit('https://training-wheels-qaninja.herokuapp.com/tables')

    cy.contains('table tbody tr', 'Round 6')
        .then(function (item) {
            item.find('.delete').trigger('click');
        })
        .should('not.exist')

    cy.get('table tbody tr')
        .then(function (series) {
            expect(series).to.have.length(6)
            //console.log(series)
        })
})