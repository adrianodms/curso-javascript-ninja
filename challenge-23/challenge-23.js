(function (win, doc) {
  'use strict';

  /*
  Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
  As regras são:

  - Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
  diretamente;
  - O input deve iniciar com valor zero;
  - Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
  - Deve haver 4 botões para as operações principais: soma (+), subtração(-),
  multiplicação(x) e divisão(÷);
  - Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
  que irá limpar o input, deixando-o com valor 0;

  - A cada número pressionado, o input deve atualizar concatenando cada valor
  digitado, como em uma calculadora real;
  - Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
  operação no input. Se o último caractere no input já for um símbolo de alguma
  operação, esse caractere deve ser substituído pelo último pressionado.
  Exemplo:
  - Se o input tem os valores: "1+2+", e for pressionado o botão de
  multiplicação (x), então no input deve aparecer "1+2x".
  - Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
  input;
  - Ao pressionar o botão "CE", o input deve ficar zerado.
  */

  var $display = doc.querySelector('[data-js="display"]');
  var $numberButtons = doc.querySelectorAll('[data-js="number"]');
  var $operationButtons = doc.querySelectorAll('[data-js="operation"]');
  var $equalButton = doc.querySelector('[data-js="equal"]');
  var $clearButton = doc.querySelector('[data-js="clear"]');
  initButtons();

  function Calculator() {
    var self = this;
    self.operation = function (operator, a, b) {
      switch (operator) {
        case '+':
          return Number(a) + Number(b);
        case '-':
          return Number(a) - Number(b);
        case 'x':
        case '*':
          return Number(a) * Number(b);
        case '/':
        case '÷':
          return Number(a) * Number(b);
        default:
          throw new Error('Operação inexistente');
      }
    }
    this.executeOperation = function (strOperation) {
      var priorityOperationsRegex = /([\d\.]+)([*x\/÷])([\d\.]+)/;
      var secondaryOperationsRegex = /([\d\.]+)([\+\-])([\d\.]+)/;
      strOperation = reduceOperations(strOperation, priorityOperationsRegex);
      strOperation = reduceOperations(strOperation, secondaryOperationsRegex);
      return strOperation;
    }

    function reduceOperations(operation, regex) {
      var nextOperation = regex.exec(operation);
      while (nextOperation) {
        var result = self.operation(nextOperation[2], nextOperation[1], nextOperation[3]);
        operation = operation.replace(nextOperation[0], result);
        nextOperation = regex.exec(operation);
      }
      return operation;
    }
  }

  function initButtons() {
    $numberButtons.forEach(function ($button) {
      $button.addEventListener('click', numbersButtonsClickHandler);
    });

    $operationButtons.forEach(function ($button) {
      $button.addEventListener('click', operationsButtonsClickHandler);
    });

    $clearButton.addEventListener('click', clearButtonClickHandler);

    $equalButton.addEventListener('click', equalButtonClickHandler);
  }

  function numbersButtonsClickHandler() {
    if ($display.value == '0') {
      $display.value = '';
    }
    $display.value += this.value;
  }

  function operationsButtonsClickHandler() {
    var value = $display.value;
    var operationsInTheEndRegex = /(.+)[\+\-\*x\/÷]$/;
    if (value.match(operationsInTheEndRegex)) {
      value = value.replace(operationsInTheEndRegex, '$1' + this.value);
    } else {
      value += this.value;
    }
    $display.value = value;
  }

  function clearButtonClickHandler() {
    $display.value = 0;
  }

  function equalButtonClickHandler() {
    var calculator = new Calculator();
    $display.value = calculator.executeOperation($display.value);
  }

})(window, document);
