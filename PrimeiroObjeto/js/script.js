// vamos criar o nosso primeiro objeto
const produtos = {
    produto1: {
        nome:"Camiseta algodão premium",
        preco: 59.99,
        disponivel: true,
    },
    produto2: {
        nome:"Calça Jeans Slim Fit",
        preco: 89.99,
        disponivel: false,
    },
    produto3: {
        nome:"Tênis Esportivo nike",
        preco: 400.00,
        disponivel: true,
    },
};

//pegar a div que vamos exibir os produtos
const listaProdutosDiv = document.getElementById('lista-produtos');

//vamos iterar os elementos do objeto produtos
for(const key in produtos){
    //vamos ler as propriedades de cada produto
    if(produtos.hasOwnProperty(key)){
        const produto = produtos[key];

        //vamos criar os elementos HTML para exibir cada produto
        const produtoDiv = document.createElement('div');
        produtoDiv.classList.add('produto');


        //vamos criar o elemento <h3> para exibir o nome
        const nomeH3 = document.createElement('h3');
        //vamos exbir o nome do produto
        nomeH3.textContent = produto.nome;

        //vamos criar o elemento <p> para exibir o preço do produto
        // formatado com 2 casas decimais
        const precoP = document.createElement('p');
        //vamos exibir o prço do produto
        precoP.textContent = `Preço: R$ ${produto.preco.toFixed(2)}`;

        //vamos criar o elemento <p> para exibir a disponibilidade
        const disponibilidadeP = document.createElement('p');
        //vamos exibir a disponibilidade
        disponibilidadeP.textContent = `Dispoibilidade: `;

        const spanDisponiblidade = document.createElement('span');
        spanDisponiblidade.textContent = produto.disponivel ? 'Disponível' : 'Indisponível';

        spanDisponiblidade.classList.add(produto.disponivel ? 'disponivel' : 'indisponivel');

        disponibilidadeP.appendChild(spanDisponiblidade);

        produtoDiv.appendChild(nomeH3);
        produtoDiv.appendChild(precoP);
        produtoDiv.appendChild(disponibilidadeP);

        //vamos adcionar a div produto a lista de produtos no HTML
        listaProdutosDiv.appendChild(produtoDiv)

    }
}