(function () {
  /*
  Aproveitando a lib DOM que fizemos na semana anterior, crie agora para ela
  métodos semelhantes aos que existem no array, mas que sirvam para os
  elementos do DOM selecionados.
  Crie os seguintes métodos:
  - forEach, map, filter, reduce, reduceRight, every e some.

  Crie também métodos que verificam o tipo do objeto passado por parâmetro.
  Esses métodos não precisam depender de criar um novo elmento do DOM, podem
  ser métodos estáticos.

  Métodos estáticos não obrigam o uso do `new`, podendo ser usados diretamente
  no objeto, como nos exemplos abaixo:
  DOM.isArray([1, 2, 3]); // true
  DOM.isFunction(function() {}); // true
  DOM.isNumber('numero'); // false

  Crie os seguintes métodos para verificação de tipo:
  - isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.
  O método isNull deve retornar `true` se o valor for null ou undefined.
  */

  function DOM(selector) {
    this.$elements = document.querySelectorAll(selector);
  }

  DOM.isArray = function (item) {
    return Object.prototype.toString.call(item) == '[object Array]';
  }
  DOM.isObject = function (item) {
    return Object.prototype.toString.call(item) == '[object Object]';
  }
  DOM.isFunction = function (item) {
    return Object.prototype.toString.call(item) == '[object Function]';
  }
  DOM.isNumber = function (item) {
    return Object.prototype.toString.call(item) == '[object Number]';
  }
  DOM.isString = function (item) {
    return Object.prototype.toString.call(item) == '[object String]';
  }
  DOM.isBoolean = function (item) {
    return Object.prototype.toString.call(item) == '[object Boolean]';
  }
  DOM.isNull = function (item) {
    return item === null || item === undefined;
  }

  DOM.prototype.get = function () {
    return this.$elements;
  }

  DOM.prototype.on = function (evt, callback) {
    Array.prototype.forEach.call(this.$elements, function ($element) {
      $element.addEventListener(evt, callback, false);
    });
  }

  DOM.prototype.off = function (evt, callback) {
    Array.prototype.forEach.call(this.$elements, function ($element) {
      $element.removeEventListener(evt, callback, false);
    });
  }

  DOM.prototype.forEach = function (callback) {
    return Array.prototype.forEach.call(this.$elements, callback);
  }

  DOM.prototype.map = function (callback) {
    return Array.prototype.map.call(this.$elements, callback);
  }

  DOM.prototype.filter = function (callback) {
    return Array.prototype.filter.call(this.$elements, callback);
  }

  DOM.prototype.reduce = function (callback, init) {
    return Array.prototype.reduce.call(this.$elements, callback, init);
  }

  DOM.prototype.reduceRight = function (callback, init) {
    return Array.prototype.reduceRight.call(this.$elements, callback, init);
  }

  DOM.prototype.every = function (callback) {
    return Array.prototype.every.call(this.$elements, callback);
  }

  DOM.prototype.some = function (callback) {
    return Array.prototype.some.call(this.$elements, callback);
  }

  var $a = new DOM('a');

  var some = $a.some(function ($item) {
    return $item.innerText === 'Link 1';
  });
  console.log(some);

  var every = $a.every(function ($item) {
    return $item.innerText === 'Link 1';
  });
  console.log(every);

  var reduceRight = $a.reduceRight(function (currentValue, actualValue) {
    return currentValue += actualValue.innerText.replace('Link ', '');
  }, 0);
  console.log(reduceRight);

  var reduce = $a.reduce(function (currentValue, actualValue) {
    return currentValue += actualValue.innerText.replace('Link ', '');
  }, 0);
  console.log(reduce);

  var filter = $a.filter(function ($item) {
    return $item.innerText === 'Link 1';
  });
  console.log(filter);

  var map = $a.map(function ($item) {
    return $item.innerText === 'Link 1';
  });
  console.log(map);

  var foreach = $a.forEach(function ($item) {
    return $item.innerText = 'trocado';
  });
  console.log(foreach);


  console.log(DOM.isArray([1,2]));
  console.log(DOM.isObject([1,2]));
  console.log(DOM.isFunction([1,2]));
  console.log(DOM.isNumber([1,2]));
  console.log(DOM.isString([1,2]));
  console.log(DOM.isBoolean([1,2]));
  console.log(DOM.isNull([1,2]));

  console.log(DOM.isArray({}));
  console.log(DOM.isObject({}));
  console.log(DOM.isFunction({}));
  console.log(DOM.isNumber({}));
  console.log(DOM.isString({}));
  console.log(DOM.isBoolean({}));
  console.log(DOM.isNull({}));

  console.log(DOM.isArray(function(){}));
  console.log(DOM.isObject(function(){}));
  console.log(DOM.isFunction(function(){}));
  console.log(DOM.isNumber(function(){}));
  console.log(DOM.isString(function(){}));
  console.log(DOM.isBoolean(function(){}));
  console.log(DOM.isNull(function(){}));

  console.log(DOM.isArray(1));
  console.log(DOM.isObject(1));
  console.log(DOM.isFunction(1));
  console.log(DOM.isNumber(1));
  console.log(DOM.isString(1));
  console.log(DOM.isBoolean(1));
  console.log(DOM.isNull(1));

  console.log(DOM.isArray('1'));
  console.log(DOM.isObject('1'));
  console.log(DOM.isFunction('1'));
  console.log(DOM.isNumber('1'));
  console.log(DOM.isString('1'));
  console.log(DOM.isBoolean('1'));
  console.log(DOM.isNull('1'));

  console.log(DOM.isArray(true));
  console.log(DOM.isObject(true));
  console.log(DOM.isFunction(true));
  console.log(DOM.isNumber(true));
  console.log(DOM.isString(true));
  console.log(DOM.isBoolean(true));
  console.log(DOM.isNull(true));

  console.log(DOM.isArray(null));
  console.log(DOM.isObject(null));
  console.log(DOM.isFunction(null));
  console.log(DOM.isNumber(null));
  console.log(DOM.isString(null));
  console.log(DOM.isBoolean(null));
  console.log(DOM.isNull(null));

  console.log(DOM.isArray(undefined));
  console.log(DOM.isObject(undefined));
  console.log(DOM.isFunction(undefined));
  console.log(DOM.isNumber(undefined));
  console.log(DOM.isString(undefined));
  console.log(DOM.isBoolean(undefined));
  console.log(DOM.isNull(undefined));


})()
