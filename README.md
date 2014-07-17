UI Test Frameworks
==================

<br>

 - João Santana
 - Rafael Guedes

<br />

Front In BH - 2014

----

## Quem somos?

 - **João Santana**
  - UI Engineer na Avenue Code
  - Ruby e JavaScript developer
  - Empreendedor por insistência

 - **Rafael Guedes**
  - UI Engineer na Avenue Code
  - Desenvolvimento web desde 2007
  - Testando em front-end desde 2013

---

## Cenário

 - Javascript mal estruturado
 - JS e CSS misturados com HTML
 - Péssima rastreabilidade, reusabilidade e manuntenabilidade

<br />

Resumindo:

 **CAOS**

----

## Melhoramos

 - Separação do código
 - Abstração de esturutras JS (e CSS)
 - Frameworks!

----

## Aplicações complexas
## trazem problemas complexos

Como previni-los?

---

# Testes!

> Os testes no código client-side passam a ter a mesma importância em relação ao server-side

<br />

Sim. Isso também significa integrá-los ao processo de build.

----

## Ferramentas de testes

 - QUnit
  - Focado em testar Javascript no browser
 - Jasmine
  - Baseado no RSpec
 - Mocha, Buster.js
  - Flexíveis e modulares

----

## Ferramentas utilitárias

 - Karma
 - PhantomJS
 - Chai
 - Sinon.js
 - TestSwarm
 - BrowserStack
 - Istanbul

----

## Mãos à massa

![Show me, don't tell me](show-me.jpg)

---

### Terminologia

 - Spies
  - Rastrear o contexto de funções executas
  - Parâmetros
  - return
  - this
  - exception


----

### Terminologia

 - Stubs
  - Spies com um comportamento pre-estabelecido
 - Mocks
  - TO DO

----

### Terminologia
 - Fakes
  - Mais simples do que Mocks
  - Interface de objetos reais
  - Exemplo: Google Maps object

----

### Stack utlizada

 - Karma
 - Mocha
 - Chai (should)
 - Sinon.js

----

## Configurando o Karma

```
npm install karma --save-dev
npm install -g karma-cli

# Plugins
npm install
> karma-mocha karma-chai karma-sinon karma-phantomjs-launcher
> --save-dev
```

```
karma init
karma start
```

*karma.conf.js*

```javascript
module.exports = function(config) {
  config.set({
    // ...
    frameworks: ['mocha', 'chai', 'sinon'],
    files: [
      'js/**/*.js',
      'test/**/*.js'
    ],
    // ...
```

----

## Criando o primeiro teste

test/test.js

```javascript
describe("My first test suite", function() {

  it('should fail', function() {
    true.should.be.false;
  });

});
```

----

## Criando os primeiros testes
## (de verdade)

Demo calculator.js
