(function () {
    /*
    Envolva todo o conteúdo desse arquivo em uma IIFE.
    */

    /*
    Crie um objeto chamado `person`, com as propriedades:
    `name`: String
    `lastname`: String
    `age`: Number
    Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
    de valor para cada propriedade.
    */
    var person = {
        name: 'Adriano',
        lastname: 'Magalhães',
        age: 32
    }
    console.log('Propriedades de "person":');

    /*
    Mostre no console, em um array, todas as propriedades do objeto acima.
    Não use nenhuma estrutura de repetição, nem crie o array manualmente.
    */
    console.log(Object.keys(person))

    /*
    Crie um array vazio chamado `books`.
    */
    var books = [];

    /*
    Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
    seguintes propriedades:
    `name`: String
    `pages`: Number
    */
    books.push({ name: 'O rei do inverno', pages: 215 });
    books.push({ name: 'O inimigo de Deus', pages: 295 });
    books.push({ name: 'Excalibur', pages: 410 });

    console.log('\nLista de livros:');

    /*
    Mostre no console todos os livros.
    */
    function showAllBooks() {
        for (var i = 0; i < books.length; i++) {
            showBook(books[i]);
        }
    }
    showAllBooks();

    function showBook(book) {
        for (prop in book) {
            console.log(`${prop}: ${book[prop]}`)
        }
    }

    console.log('\nLivro que está sendo removido:');
    /*
    Remova o último livro, e mostre-o no console.
    */
    showBook(books.pop())

    console.log('\nAgora sobraram somente os livros:');
    /*
    Mostre no console os livros restantes.
    */
    showAllBooks();

    /*
    Converta os objetos que ficaram em `books` para strings.
    */
    // ?
    console.log('\nLivros em formato string:');

    for(var i = 0; i<books.length; i++){
        books[i] = JSON.stringify(books[i])
    }

    /*
    Mostre os livros nesse formato no console:
    */
    // ?
    
    for(var i = 0; i<books.length; i++){
        console.log(books[i])
    }
    /*
    Converta os livros novamente para objeto.
    */
    // ?
    console.log('\nAgora os livros são objetos novamente:');
    for(var i = 0; i<books.length; i++){
        books[i] = JSON.parse(books[i])
    }
    /*
    Mostre no console todas as propriedades e valores de todos os livros,
    no formato abaixo:
    "[PROPRIEDADE]: [VALOR]"
    */
   showAllBooks();

    /*
    Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
    seu nome. Adicione seu nome completo no array.
    */
    var myName = ['A','d','r','i','a','n','o', 'D','u','t','r','a', 'M','a','g','a','l','h','ã','e','s'];
    console.log('\nMeu nome é:');
    
    /*
    Juntando todos os itens do array, mostre no console seu nome.
    */
    console.log(myName.join(' '));

    console.log('\nMeu nome invertido é:');

    /*
    Ainda usando o objeto acima, mostre no console seu nome invertido.
    */
   console.log(myName.reverse().join(' '));

    console.log('\nAgora em ordem alfabética:');
    /*
    Mostre todos os itens do array acima, odenados alfabéticamente.
    */
   console.log(myName.sort().join(' '));


})()