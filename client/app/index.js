var campos = [
    document.querySelector('#data'),
    document.querySelector('#valor'),
    document.querySelector('#quantidade')

]; // Criando um Array para salvar os dados dos campos do formulário

//console.log(campos); // Print no console o valor do array

let tbody = document.querySelector('table tbody');

document.querySelector('.form').addEventListener('submit', function (event) {
    // testa se o Submit funciona
    //alert('Já funciona !') 

    // cancela a submissão do formulário
    event.preventDefault();


    let tr = document.createElement('tr');

    campos.forEach(function (campo) {
        // cria uma td sem informações
        let td = document.createElement('td');

        // atribui o valor do campo a td 
        td.textContent = campo.value;

        // adiciona a td na tr
        tr.appendChild(td);
    });


    // nova td que armazenará o volume da negociação
    var tdVolume = document.createElement('td');

    // as posições 1 e 2 do array armazenam os campos de quantidade e valor, respectivamente
    tdVolume.textContent = campos[1].value * campos[2].value;

    // adicionando a td que faltava à tr
    tr.appendChild(tdVolume);

    // adicionando a tr
    tbody.appendChild(tr);


    // Limpa os campos
    campos[0].value = '';
    campos[1].value = 0;
    campos[2].value = 1;
    
    // Foca no primeiro campo
    campos[0].focus();

});