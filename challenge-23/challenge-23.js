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
    function sum(a, b) {
      return a + b;
    };
    function substraction(a, b) {
      return a - b;
    };
    function division(a, b) {
      return a / b;
    };
    function multiplication(a, b) {
      return a * b;
    };
    function operation(operator) {
      switch (operator) {
        case '+':
          return sum;
        case '-':
          return substraction;
        case 'x':
        case '*':
          return multiplication;
        case '/':
        case '÷':
          return division;
        default:
          throw new Error('Operação inexistente');
      }
    }
    this.executeOperation = function (strOperation) {
      var priorityOperationsRegex = /(\d+[*x\/÷]\d+){1,}/g;
      var operationsPartsRegex = /^(\d+)([\+\-\*x\/÷])(\d+)$/g;

      // var priorityOperations = priorityOperationsRegex.exec(strOperation);
      // var result = 0;
      // while (priorityOperations.length) {
      //   priorityOperations.forEach(function (item) {
      //     var operationItems = item.match(operationsPartsRegex);
      //     var operation = this.operation(operationItems[1])
      //     result += operation.apply(operation, [operationItems[0], operationItems[2]]);
      //   });
      //   priorityOperations.pop();
      // }

      var operations = strOperation.match(/(\d+[\+\-\*x\/÷]\d+)/g);
    }
  }


  function initButtons() {
    $numberButtons.forEach(function ($button) {
      $button.addEventListener('click', function () {
        if ($display.value == '0') {
          $display.value = '';
        }
        $display.value += $button.value;
      });
    });

    $operationButtons.forEach(function ($button) {
      $button.addEventListener('click', function () {
        var value = $display.value;
        var operationsInTheEndRegex = /(.+)[\+\-\*x\/÷]$/;
        if (value.match(operationsInTheEndRegex)) {
          value = value.replace(operationsInTheEndRegex, '$1' + $button.value);
        } else {
          value += $button.value;
        }
        $display.value = value;
      });
    });

    $clearButton.addEventListener('click', function () {
      $display.value = 0;
    });


    $equalButton.addEventListener('click', function () {
      var calculator = new Calculator();
      calculator.executeOperation($display.value);
    });
  }
})(window, document);
