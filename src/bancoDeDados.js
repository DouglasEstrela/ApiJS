const sequencia = {
    _id: 1,
    get id(){return this._id++}
}

const produtos = {}

function salvarProduto(produto){
    if(!produto.id) produto.id = sequencia.id
    produtos[produto.id] = produto
    return produto
}

function getProduto(id){
    return produtos[id] || "PRODUTO NÃO ENCONTRADO"
}

function getProdutos(){
    return Object.values(produtos)
}

function excluirProduto(id){
    const produto = produtos[id]
    delete produtos[id]
    return produto
}

module.exports = {salvarProduto, getProduto, getProdutos, excluirProduto}