/// <reference types ="cypress"/>

//Manipulando Select (combo-box)

it('Selecionar Bucky por um id', function(){
    cy.visit("https://training-wheels-qaninja.herokuapp.com/select")
    cy.wait(10000)

    cy.get("#avengerList")
        .select("Bucky")
        .should("have.value", "2")
})


it('Selecionar Toney Stark sem ser pelo id', function(){
    cy.visit("https://training-wheels-qaninja.herokuapp.com/select")

cy.contains("option", "Selecione um personagem")
    .parent()
    .select("Tony Stark")
    .should("have.value","3")
})


