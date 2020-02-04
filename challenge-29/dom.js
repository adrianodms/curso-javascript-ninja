(function () {
  'use strict';
  function DOM(selector) {
    if (!(this instanceof DOM))
      return new DOM(selector);
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

  window.DOM = DOM;
})()
