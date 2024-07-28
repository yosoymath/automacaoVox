class sauceDemoElements {

    // Retorna o seletor para a imagem do item 1 no catálogo
    foto = () => {
        return "#item_1_img_link > .inventory_item_img"
    }

    // Retorna o URL da imagem do produto 1
    produto1 = () => {
        return './img/bolt-shirt-1200x1500.jpg'
    }

    // Retorna o seletor para a mensagem de erro exibida na página
    msgError = () => {
        return '[data-test="error"]'
    }

    // Retorna o seletor para o contador de produtos no carrinho
    contadorPrd = () => {
        return '.fa-layers-counter'
    }

    // Retorna o seletor para o botão de finalizar/checkout
    btnCheckoutFinish = () => {
        return '.btn_action';
    }

    // Retorna o seletor para o campo de entrada do nome no checkout
    nome = () => {
        return '[data-test="firstName"]'
    }

    // Retorna o seletor para o campo de entrada do sobrenome no checkout
    sobrenome = () => {
        return '[data-test="lastName"]'
    }

    // Retorna o seletor para o campo de entrada do CEP no checkout
    CEP = () => {
        return '[data-test="postalCode"]'
    }

    // Retorna o seletor para o botão de continuar no checkout
    btnContinue = () => {
        return '.btn_primary'
    }

    // Retorna o seletor para a quantidade de itens no carrinho
    qtdCarrinho = () => {
        return '.summary_quantity'
    }
}

export default sauceDemoElements;