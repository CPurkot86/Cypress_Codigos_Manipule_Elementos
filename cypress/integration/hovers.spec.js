
//Cypress não tem MouseOver nativo! E agora?

it('deve exibir o nome da tecnologia ao passar o mouse', function () {
    cy.visit('https://training-wheels-qaninja.herokuapp.com/hovers')

    const techs = [
        { img: 'img[src*=python]', tag: '.tag-python', brand: 'Python' },
        { img: 'img[src*=golang]', tag: '.tag-golang', brand: 'Golang' },
        { img: 'img[src*=nodejs]', tag: '.tag-nodejs', brand: 'Node.js' },
        { img: 'img[src*=netcore]', tag: '.tag-netcore', brand: '.NETCore' }
    ]

    techs.forEach(function (tech) {
        cy.get(tech.img)
            .realHover('mouse')

        cy.get(tech.tag)
            .should('be.visible')
            .should('have.text', tech.brand)
    })
})

//Bucando unico elemento mouse hover
//cy.get('img[src*=nodejs]')
    //.realHover('mouse')

 //cy.get('.tag-nodejs')
    //.should('be.visible')
    //.should('have.text', 'Node.js')

//https://docs.cypress.io/api/commands/hover#Trigger **cypress nao da suporte**
//Instalar um plugin
//Nome pulgin cypress-real-events -D
// usar npm install < nome do plugin >
//dentro de package.json tera o plugin  "cypress-real-events": "^1.7.1"
//dentrode support index, colocar o import 'cypress-real-events/support'