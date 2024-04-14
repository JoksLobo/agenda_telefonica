const form = document.getElementById('form-agenda');
const contatoSalvo = '<img src="./salvo.png" alt="tique-salvo />"';
let linhas = '';


form.addEventListener('submit', function(e){
    e.preventDefault();

    const inputNomeContato = document.getElementById('contato-nome');
    const inputNumeroConato = document.getElementById('contato-numero');

    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNumeroConato.value}</td>`;
    linha += `<td>${inputNumeroConato.value = contatoSalvo}`
    linha += '</tr>';

    linhas += linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    inputNomeContato.value = '';
    inputNumeroConato.value = '';
})