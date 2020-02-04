(function ($) {
  'use strict';

  /*
  Vamos estruturar um pequeno app utilizando módulos.
  Nosso APP vai ser um cadastro de carros. Vamos fazê-lo por partes.
  A primeira etapa vai ser o cadastro de veículos, de deverá funcionar da
  seguinte forma:
  - No início do arquivo, deverá ter as informações da sua empresa - nome e
  telefone (já vamos ver como isso vai ser feito)
  - Ao abrir a tela, ainda não teremos carros cadastrados. Então deverá ter
  um formulário para cadastro do carro, com os seguintes campos:
    - Imagem do carro (deverá aceitar uma URL)
    - Marca / Modelo
    - Ano
    - Placa
    - Cor
    - e um botão "Cadastrar"

  Logo abaixo do formulário, deverá ter uma tabela que irá mostrar todos os
  carros cadastrados. Ao clicar no botão de cadastrar, o novo carro deverá
  aparecer no final da tabela.

  Agora você precisa dar um nome para o seu app. Imagine que ele seja uma
  empresa que vende carros. Esse nosso app será só um catálogo, por enquanto.
  Dê um nome para a empresa e um telefone fictício, preechendo essas informações
  no arquivo company.json que já está criado.

  Essas informações devem ser adicionadas no HTML via Ajax.

  Parte técnica:
  Separe o nosso módulo de DOM criado nas últimas aulas em
  um arquivo DOM.js.

  E aqui nesse arquivo, faça a lógica para cadastrar os carros, em um módulo
  que será nomeado de "app".
  */

  function Car(img, brand, year, plate, color) {
    this.img = img;
    this.brand = brand;
    this.year = year;
    this.plate = plate;
    this.color = color;
  }

  function app() {
    function init() {
      getCompanyInfos(handleCompanyInfos);
      submitForm();
    }

    function handleCompanyInfos(companyInfos) {
      $('[data-js="empresa-nome"]').get()[0].textContent = companyInfos.name;
      $('[data-js=empresa-telefone]').get()[0].textContent = companyInfos.phone;
    }

    function getCompanyInfos(callback, error) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', '/company.json');
      xhr.send();
      xhr.addEventListener('readystatechange', function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          if (callback) {
            callback(JSON.parse(xhr.responseText));
          }
        }
      });
    }

    function submitForm() {
      var $form = ($('[data-js="car-form"]')).get()[0];
      $form.addEventListener('submit', function (e) {
        e.preventDefault();
        var carImg = $('[data-js=car-img]').get()[0].value;
        var carBrand = $('[data-js=car-brand]').get()[0].value;
        var carYear = $('[data-js=car-year]').get()[0].value;
        var carPlate = $('[data-js=car-plate]').get()[0].value;
        var carColor = $('[data-js=car-color]').get()[0].value;

        fillTable(new Car(carImg, carBrand, carYear, carPlate, carColor));

      });
    }

    function fillTable(car) {
      var docFragment = document.createDocumentFragment();
      var tr = document.createElement('tr');

      for (var data in car) {
        var td = document.createElement('td');
        td.innerText = car[data];
        tr.appendChild(td)
      }
      docFragment.appendChild(tr);

      $('[data-js=table-content]').get()[0].appendChild(tr);
    }

    init();

    return {
      init: init,
      getCompanyInfos: getCompanyInfos,
      handleCompanyInfos: handleCompanyInfos
    }
  }

  window.app = app;
  app();
})(window.DOM);
