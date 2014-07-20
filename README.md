UI Test Frameworks
==================

<br>

João Lucas & Rafael Guedes 

<br />

Front In BH - 2014

----

## Quem somos?

#### Não, não somos mais uma dupla sertaneja!

----

## Quem somos?

 - **João Lucas Santana** ( @jlucasps )
  - UI Engineer na Avenue Code
  - Ruby e JavaScript developer
  - Empreendedor por insistência

 - **Rafael Guedes** ( @rafaelmenta )
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

![Ferramentas de testes](img/tools.jpg)

----

## Ferramentas de testes

![Jasmine](img/jasmine.png)

- Matchers customizados, spies, async, clock

```javascript
describe("Calculator", function() {
    var calc;
    before(function() {
        calc = Calculator();
    });
    it('should sum two numbers', function() {
        var result = calc.add(2, 3);
        result.should.equals(5);
    });
});
```

----

## Ferrametnas de testes

![QUnit](img/qunit.png)

- jQuery project
- Focado em testar Javascript no browser
- Framework, Modules, Tests, Assertions

```javascript
var calc;
module( "Awesome module", {
    setup: function() { 
        calc = new Calc();
    },
    teardown: function() { }
} );

test( "sum", function( ) {
    deepEqual( calc.sum( 2, 4 ), 6, "Description" );
    equal( calc.sum( 2, 4 ), "6", "Description" );
} );
```

----

## Ferramentas de testes

![Mocha](img/mocha.png)

- Framework flexível e modular para node.js e browser
- Testes async e promisses
- Hooks ``` before, beforeEach, after, afterEach```

```javascript
describe("a test", function() {
    var foo = false;
    beforeEach(function(done) {
        setTimeout(function() {
            foo = true;
            done();
        }, 50);
    });
    it("should pass", function() {
        expect(foo).equals(true);
    });
});
```

----

## Ferramentas de testes

![Buster](img/buster.png)

- Framework flexível e modular para node.js e browser
- Integrado com Sinon.JS

```javascript
buster.spec.expose();
describe("My thing", function () {
    it("has the foo and bar", function () {
        expect("foo").toEqual("bar");
    });
    it("states the obvious", function () {
        expect(true).toBe(true);;
    });
});
```

----

## Como escolher meu framework?

 - Estável
 - Comunidade
 - Compatível com tecnologias do projeto
 - Modular

---

## Ferramentas utilitárias

![Karma](img/karma.png)
![PhantomJS](img/phantomjs.png)
![Chai](img/chai.png)
![BrowserStack](img/browserstack.png)
![TestSwarm](img/testswarm.png)
![Blanket.js](img/blanket.png)
![Sinon.js](img/sinonjs.png)

----

## Ferramentas de testes

 - Karma
 - PhantomJS
 - Chai
 - Sinon.js
  - Spies, Stubs, Mocks, FakeTimer, FakeXHR
 - TestSwarm
 - BrowserStack
 - Istanbul

----

## Spies

![Spies](img/spy.jpg)

----

## Spies

- Funções que informam sobre funções executadas
  - Chamadas
  - Argumentos
  - Contexto
  - Retorno
  - Exceções

----

## Stubs

![Stubs](img/real-spy.jpg)

----

## Stubs

- Spy com comportamento pré-estabelecido
- ~Engana~ o fluxo do sistema
  - Especialmente útil para código com dependências

----

## Mocks

![Mocks](img/mocks.jpg)

----

## Mocks

- Métodos com comportamento pré-estabelecido
- Fazem seu código falhar se não forem executados corretamente

----

## Fakes

![Fakes](img/fake.jpg)

----

## Fakes

- Mais simples do que Mocks
- Interface de objetos reais
  - Ex: Google Maps object

---

## Mãos à massa

![Show me, don't tell me](img/show-me.jpg)

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
