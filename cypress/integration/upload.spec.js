
//Upload e validação de imagem!

it('deve fazer upload da minha imagem', function () {
    cy.visit('https://training-wheels-qaninja.herokuapp.com/upload')

    const imageFile = 'cypress/fixtures/dragonballsuper.jpg'

    //cypress não manipula janelas do windowns, então preciso obter massa de teste, abrir a pasta do arquivo, mover o arquivo e mover para pasta de fixtures
    cy.get('input[name=file]').selectFile(imageFile, { force: true })

    cy.get('input[value=Upload]').click()

    cy.get('img[src="/uploads/dragonballsuper.jpg"]', { timeout: 7000 })
        .should('be.visible')

}) 