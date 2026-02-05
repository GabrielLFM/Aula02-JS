const exemploArrayLiteralDiv = document.getElementById('exemplo-array-literal');

const frutas =['maçã', 'uva', 'banana'];

exemploArrayLiteralDiv.innerHTML = `
    <h2>Exemplo de array com literal</h2>
    <p>Array: [ ${frutas} ]</p>

`;

const exemploArrayAcessoDiv = document.getElementById('exemplo-array-acesso');

const numeros = [1, 2, 3, 4, 5]

const primeroElemento  = numeros[0]
const segundoElemento  = numeros[1]
const terceiroElemento = numeros[2]
const quartoElemento   = numeros[3]
const quintoElemento   = numeros[4]

exemploArrayAcessoDiv.innerHTML = `
    <h2>Exemplo de acesso aos elementos do array</h2>
    <p>Primeiro elemento: ${primeroElemento}</p>
    <p>Segundo elemento: ${segundoElemento}</p>
    <p>Terceiro elemento: ${terceiroElemento}</p>
    <p>Quarto elemento: ${quartoElemento}</p>
    <p>Quinto elemento: ${quintoElemento}</p>
`

const exemploArrayModificadolDiv = document.getElementById('exemplo-array-modificado');

const cores =['azul', 'amarelo', 'vermelho'];

cores[0] = 'rosa';

exemploArrayModificadolDiv.innerHTML = `
    <h2>Exemplo de array modificado</h2>
    <p>Array: [ ${cores} ]</p>

`;
