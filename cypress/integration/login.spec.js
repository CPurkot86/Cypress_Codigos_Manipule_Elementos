/// <reference types ="cypress"/>

//cenário
it('deve logar com sucesso',function(){

    //acessar uma URL
    cy.visit('/login')

    //Preencher campos login e senha
    cy.get('#userId').type('stark')
    cy.get('#passId').type('jarvis!')

    //clicar em um botão "login"
    cy.get('button[type=submit]').click()

    //Validar texto da página
    cy.get('h4[class="subheader"]')
        .should('have.text','Bem-vindo à área logada. Quando terminar, clique em logout.')

})