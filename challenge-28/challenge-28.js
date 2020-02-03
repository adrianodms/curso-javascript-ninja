(function (DOM) {

  /*
  No HTML:
  - Crie um formulário com um input de texto que receberá um CEP e um botão
  de submit;
  - Crie uma estrutura HTML para receber informações de endereço:
  "Logradouro, Bairro, Estado, Cidade e CEP." Essas informações serão
  preenchidas com os dados da requisição feita no JS.
  - Crie uma área que receberá mensagens com o status da requisição:
  "Carregando, sucesso ou erro."

  No JS:
  - O CEP pode ser entrado pelo usuário com qualquer tipo de caractere, mas
  deve ser limpo e enviado somente os números para a requisição abaixo;
  - Ao submeter esse formulário, deve ser feito um request Ajax para a URL:
  "https://viacep.com.br/ws/[CEP]/json/", onde [CEP] será o CEP passado
  no input criado no HTML;
  - Essa requisição trará dados de um CEP em JSON. Preencha campos na tela
  com os dados recebidos.
  - Enquanto os dados são buscados, na área de mensagens de status, deve mostrar
  a mensagem: "Buscando informações para o CEP [CEP]..."
  - Se não houver dados para o CEP entrado, mostrar a mensagem:
  "Não encontramos o endereço para o CEP [CEP]."
  - Se houver endereço para o CEP digitado, mostre a mensagem:
  "Endereço referente ao CEP [CEP]:"
  - Utilize a lib DOM criada anteriormente para facilitar a manipulação e
  adicionar as informações em tela.
  */

  var CEPinput = (new DOM('[data-js=input-cep]')).get()[0];
  var submitBtn = new DOM('[data-js="buscar"]');

  var logradouroSpan = (new DOM('[data-js=logradouro]')).get()[0];
  var bairroSpan = (new DOM('[data-js=bairro]')).get()[0];
  var estadoSpan = (new DOM('[data-js=estado]')).get()[0];
  var cidadeSpan = (new DOM('[data-js=cidade]')).get()[0];
  var cepSpan = (new DOM('[data-js=cep]')).get()[0];

  var ajaxStatus = (new DOM('[data-js=ajax-status]')).get()[0];

  submitBtn.on('click', function () {
    fillAddress('', '', '', '', '');

    var cep = CEPinput.value.replace(/\D/g, '');
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://viacep.com.br/ws/' + cep + '/json/');
    xhr.send();
    xhr.addEventListener('readystatechange', function () {
      if (this.readyState == 1 || this.readyState == 2 || this.readyState == 3) {
        ajaxStatus.innerText = 'Buscando informações para o CEP ' + cep + '...';
      }
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {
          var response = JSON.parse(xhr.responseText);

          fillAddress(response.logradouro, response.bairro, response.uf, response.localidade, response.cep);

          ajaxStatus.innerText = 'Endereço referente ao CEP: ' + cep;

        } else {
          ajaxStatus.innerText = 'Não encontramos o endereço para o CEP ' + cep + '.';
        }

      }
    });

  });

  function fillAddress(logradouro, bairro, uf, localidade, cep) {
    logradouroSpan.innerText = logradouro;
    bairroSpan.innerText = bairro;
    estadoSpan.innerText = uf;
    cidadeSpan.innerText = localidade;
    cepSpan.innerText = cep;
  }

})(window.DOM);



