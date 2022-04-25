Massa de Dados para fazer testes
https://training-wheels-protocol.herokuapp.com/ 



Instalando o Cypress sem mistérios

O Cypress é um framework para automação de testes e2e para aplicações web. Com ele você vai escrever seus testes usando a linguagem javascript. É uma ferramenta que vem crescendo e conquistando espaço na área de qualidade.
A sua facilidade em executar os testes e visualizar o log de cada ação é um grande ponto, que auxilia bastante para quem está iniciando com a automação de teste e não tem tanto domínio ainda em escrever código, pois consegue acompanhar de forma bem clara cada ação que foi codificada e visualizar melhor quando acontece algum erro.

A sua instalação é bem simples vamos lá. Você precisa ter o Node.js instalado, a partir da versão 8. Para saber qual versão você usa pode utilizar o comando abaixo, em um terminal. Eu utilizo o Windows e gosto do Cmder console emulator.

Bom já vimos que está tudo ok com a versão do Node.js, agora vamos criar uma pasta para nosso projeto e acessá-la para realizar a instalação.

Nessa pasta do projeto que vamos realizar a instalação do Cypress. Antes de instalar o Cypress execute o comando abaixo para iniciarmos o nosso projeto, com esse comando o arquivo package.json será criado.

# Installation

```
npm init -y
```

Agora sim vamos instalar o Cypress via npm.

```
npm install cypress
```

Após isso vamos abrir esse projeto em um editor de código, eu utilizo o VSCode.
Nesse projeto ainda não vemos nada do Cypress. Precisamos executar o Cypress pela primeira vez para que sua estrutura de pasta seja criada.

Para executar o Cypress de uma forma mais simples vamos editar o arquivo package.json criado acima, inserindo o trecho abaixo dentro da chave scripts.

```
"cypress": "cypress open"
```
Após realizar essa alteração no package.json, nós iremos abrir o Cypress pelo terminal, nesse ponto tenha a certeza que o terminal está sendo executado em modo administrador. Eu uso o terminal de dentro do VSCode mesmo pela praticidade de já estar dentro da pasta do projeto. Esse é um ponto importante preciso estar na pasta do projeto para executá-lo.
Caso você tenha algum erro ao executar pelo terminal dentro do VSCode eu recomendo que você executei o comando em um terminal separado do VSCode, assim você poderá executá-lo como administrador e com isso não terá erro ao rodar o comando abaixo.

```
npm run cypress
```
Após isso a interface gráfica do Cypress irá abrir. Por default ele já vem com vários testes exemplos.

Pronto agora o Cypress já está instalado e toda vez que quiser executá-lo basta utilizar o comando: 

```
npm run cypress
```
Após a primeira execução do Cypress repare que no seu projeto agora aparece a pasta Cypress e dentro dela mais 4 pastas que compõem a estrutura do Cypress.


De uma fora bem resumida essas 4 pastas são:
fixtures: Utilizada para os arquivos de dados fixos, como mocks que serão utilizados nos testes;
integration: Utilizada para os arquivos de testes;
plugins: Utilizada para arquivos que eu posso criar/editar para modificar ou estender o comportamento interno no Cypress;
support: Utilizada para arquivos de importação e comandos personalizados que podemos criar dentro do Cypress

Linguagem

```
Como escrever usando o Gherkin:
Funcionalidade: <Nome da funcionalidade>
        <Estória do usuário>

        Cenário: <Nome do cenário>
                Dado <pré-condição>
                E <pré-condição>
                Quando <ação>
                E <ação>
                Então <resultado esperado>
                E <resultado esperado>

```
Como escrever usando o Gherkin:

Funcionalidade: Login
        Como proprietário de loja de material de construção, gostaria de efetuar login para verificar os produtos disponíveis na Loja Virtual da Juntos Somos +

        Cenário: Efetuar login com sucesso
                Dado que estou na home deslogada
                Quando eu inserir os dados corretos
                Então devo estar na home logada