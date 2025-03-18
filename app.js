const INPUT_NOME = document.getElementById('amigo');
const LISTAR_AMIGOS = document.getElementById('listaAmigos');
const RESULTADO_AMIGO = document.getElementById('resultado');

let amigos = [];

// Função para adicionar amigos à lista
function adicionarAmigo() {
    const nome = INPUT_NOME.value.trim(); // Obtém o valor do campo de entrada, removendo espaços extras

    if (nome === '') {
        alert('Por favor, insira um nome válido!');
        return;
    }

    amigos.push(nome); // Adiciona o nome à lista de amigos

    // Atualiza a lista de amigos na interface
    atualizarLista();

    // Limpa o campo de entrada
    INPUT_NOME.value = '';
}

// Função para atualizar a lista de amigos na página
function atualizarLista() {
    LISTAR_AMIGOS.innerHTML = ''; // Limpa a lista atual

    amigos.forEach(function(amigo) {
        const li = document.createElement('li');
        li.textContent = amigo;
        LISTAR_AMIGOS.appendChild(li);
    });
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Adicione pelo menos um amigo para realizar o sorteio.');
        return;
    }

    // Sorteia um amigo aleatoriamente
    const sorteado = amigos[Math.floor(Math.random() * amigos.length)];

    // Exibe o resultado
    RESULTADO_AMIGO.innerHTML = `<li>O amigo secreto sorteado é: <strong>${sorteado}</strong></li>`;
}
