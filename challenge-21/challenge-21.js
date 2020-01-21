(function (win, doc) {
    'use strict';

    /*
    O desafio de hoje será um pequeno projeto: um cronômetro!
    As regras para criação do cronômetro são as seguintes:
    1. Crie um arquivo index.html e adicione esse script a ele;
    2. Crie um campo `input` do tipo `text`, e inicie-o com um valor 0 (zero).
    Ele será o nosso cronômetro;
    3. Crie 3 botões para as ações do cronômetro: Start, Stop e Reset;
    4. Ao clicar em Start, o valor do campo deve ser incrementado de 1 em 1, a
    cada segundo;
    5. Ao clicar em Stop, o cronômetro deve parar de contar;
    6. Ao clicar em Reset, o cronômetro deve zerar e parar de contar.

    Utilize o atributo data-js para nomear o campo e os botões. Você pode
    usar o nome que achar melhor, desde que ele seja semântico, ou seja, o nome
    dado ao elemento HTML deve definir o que o elemento é ou o que ele faz.
    */
    // ?

    var $timerInput = doc.querySelector('[data-js="timer"]');
    var $startButton = doc.querySelector('[data-js="start-button"]');
    var $stopButton = doc.querySelector('[data-js="stop-button"]');
    var $resettButton = doc.querySelector('[data-js="reset-button"]');

    function Timer($timerInput) {
        var interval = null;
        var self = this;

        this.start = function start() {
            interval = win.setTimeout(function () {
                var time = Number($timerInput.value) || 0;
                $timerInput.value = ++time;
                self.start();
            }, 1000);
        };

        this.stop = function stop() {
            if (interval) {
                clearTimeout(interval);
            }
        };

        this.reset = function reset() {
            self.stop();
            $timerInput.value = 0;
        };

    }
    var timer = new Timer($timerInput);

    $startButton.addEventListener('click', timer.start);
    $stopButton.addEventListener('click', timer.stop);
    $resettButton.addEventListener('click', timer.reset);


})(window, document)