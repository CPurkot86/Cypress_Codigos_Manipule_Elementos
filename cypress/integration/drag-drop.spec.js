/// <reference types ="cypress"/>

it('deve arrastar o cypress para a caixinha no node', function(){
cy.visit('/drag_and_drop')

const dataTransfer = new DataTransfer()

cy.get ('img[alt=Cypress]').trigger('dragstart',{dataTransfer})

cy.get ('.nodejs figure[draggable=true]').trigger('drop', {dataTransfer})

})

it('deve arrastar o robot para a caixinha no python', function(){
    cy.visit('https://training-wheels-qaninja.herokuapp.com/drag_and_drop')
    
    const dataTransfer = new DataTransfer()
    
    cy.get ('img[alt="Robot Framework"]').trigger('dragstart',{dataTransfer})
    
    cy.get ('.python figure[draggable=true]').trigger('drop', {dataTransfer})
    
    })