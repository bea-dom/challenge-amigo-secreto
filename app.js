let amigos=[];

function adicionarAmigo() {
    let nomeAmigo = document.querySelector('input').value;
    
    if (nomeAmigo === ''){
        console.log(`o usuario tentou inserir um valor vazio`);
        alert(`Por favor, insira um nome.`);
        
    } else {
        console.log(`o usario inseriu o nome ${nomeAmigo} na lista de sorteio`); 
        amigos.push(nomeAmigo);
        limparCampo();
        atualizaListaTela();

    }
}

function limparCampo(){
    campo = document.querySelector('input');
    campo.value = '';
}

function atualizaListaTela(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ' ';

    amigos.forEach(amigo => {
        let li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });

}

function sortearAmigo() {
    tamanhoLista = amigos.length;

    if (tamanhoLista == 0){
        console.log(`o usario tentou realizar um sorteio sem inserir nomes a lista`);
        alert(`Por favor, insira pelo menos um nome antes de realizar o sorteio`);
    } else {
        sorteado = parseInt(Math.random()*(tamanhoLista));
        console.log(`o nome sorteado foi ${amigos[sorteado]} `); 
        console.log(`o indice sorteado foi ${sorteado} `); 

        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `O amigo secreto foi: ${amigos[sorteado]} `;

        return 0;
    }
    
}
