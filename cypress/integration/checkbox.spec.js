/// <reference types ="cypress"/>

it('dev marcar os top 5 filmes da marvel', function(){
cy.visit('https://training-wheels-protocol.herokuapp.com/checkboxes')

//selecionar mais de um checkbox
const movies = [
    'the-avengers',
    'cap',
    'iron-man'
]

//agrupamento da constante selecionar varios
movies.forEach(function(m){
    cy.get(`input[value=${m}]`)
    .click()
    .should('be.checked')

})

//Clicar no checkbox
//cy.get('input[value=cap]')
   // .click()
   //validar se realmente a opção foi selecionada be.checked
    //.should('be.checked')

})