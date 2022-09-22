


it('selecionar a data de nascimento', function () {
    cy.visit('https://training-wheels-qaninja.herokuapp.com/datepicker')

    const date = {
        month: 'dez',
        year: '1986',
        day: '15'  // /^15$/g(g= procurar no google regular expression w3c)
    }

    cy.get('.datetimepicker-dummy-input').click()

    cy.get('.datepicker-nav-month').click()
    cy.contains('.datepicker-month', date.month).click()

    cy.get('.datepicker-nav-year').click()
    cy.contains('.datepicker-year span', date.year).click()

    cy.contains('button[class=date-item]', new RegExp('^' + date.day + '$', 'g')).click()

})