class sauceDemoElements{
    foto = () => {
        return "#item_1_img_link > .inventory_item_img"
    }
    produto1 = () => {
        return './img/bolt-shirt-1200x1500.jpg'
    }
    msgError = () => {
        return '[data-test="error"]'
    }
    contadorPrd = () => {
        return '.fa-layers-counter'
    }
    btnCheckoutFinish = () => {
        return '.btn_action';
    }
    nome = () => {
        return '[data-test="firstName"]'
    }
    sobrenome = () => {
        return '[data-test="lastName"]'
    }
    CEP = () => {
        return '[data-test="postalCode"]'
    }
    btnContinue = () => {
        return '.btn_primary'
    }
    qtdCarrinho = () => {
        return '.summary_quantity'
    }
}

export default sauceDemoElements;