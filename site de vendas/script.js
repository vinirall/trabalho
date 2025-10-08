// Armazenar o carrinho
let carrinho = [];

// Função para atualizar a visualização do carrinho
function atualizarCarrinho() {
    const carrinhoElement = document.getElementById('itens-carrinho');
    const totalElement = document.getElementById('total');

    // Limpar a lista do carrinho
    carrinhoElement.innerHTML = '';

    // Adicionar itens ao carrinho
    if (carrinho.length === 0) {
        carrinhoElement.innerHTML = '<li>Nenhum item no carrinho</li>';
    } else {
        carrinho.forEach(item => {
            carrinhoElement.innerHTML += `<li>${item.nome} - R$ ${item.preco}</li>`;
        });
    }

    // Calcular o total
    const total = carrinho.reduce((acc, item) => acc + parseFloat(item.preco), 0);
    totalElement.innerHTML = `Total: R$ ${total.toFixed(2)}`;
}

// Adicionar produto ao carrinho
document.querySelectorAll('.btn-comprar').forEach(button => {
    button.addEventListener('click', function() {
        const produtoNome = this.getAttribute('data-produto');
        const produtoPreco = this.getAttribute('data-preco');

        // Adicionar item ao carrinho
        carrinho.push({ nome: produtoNome, preco: produtoPreco });

        // Atualizar a visualização do carrinho
        atualizarCarrinho();
    });
});

// Função de finalização de compra (simulada)
document.getElementById('finalizar-compra').addEventListener('click', function() {
    if (carrinho.length === 0) {
        alert('Seu carrinho está vazio!');
    } else {
        alert('Compra finalizada com sucesso! \n' + carrinho.map(item => `${item.nome} - R$ ${item.preco}`).join('\n'));
        // Limpar carrinho após a compra
        carrinho = [];
        atualizarCarrinho();
    }
});
