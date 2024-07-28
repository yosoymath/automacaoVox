import LoginPage from "./login/login.cy";
import sauceDemoElements from "./sauceDemo";

const loginPage = new LoginPage();
const SauceDemoElements = new sauceDemoElements();

// Função para verificar as imagens no catálogo têm um URL específico
function imagemCatalogo() {
    cy.get(SauceDemoElements.foto()) // Seleciona todos os elementos de imagem com o seletor fornecido
        .each(($el) => {
            cy.wrap($el)                 // Garante que estamos trabalhando com o elemento correto
                .should('have.attr', 'src', './img/bolt-shirt-1200x1500.jpg'); // Verifica o atributo 'src' da imagem
        });
}

// Função para verificar as imagens no catálogo têm um URL incorreto
function semImagemCatalogo() {
    cy.get(SauceDemoElements.foto()) // Seleciona todos os elementos de imagem com o seletor fornecido
        .each(($el) => {
            cy.wrap($el)                 // Garante que estamos trabalhando com o elemento correto
                .should('have.attr', 'src', './img/bolt-shirt-1200x1500.jpgWithGarbageOnItToBreakTheUrl'); // Verifica o atributo 'src' da imagem
        });
}

// Função para adicionar três produtos ao carrinho com base em seletores CSS específicos
function adicionarCarrinho() {
    cy.get(':nth-child(1) > .pricebar > .btn_primary').click() // Adiciona o primeiro produto
    cy.get(':nth-child(2) > .pricebar > .btn_primary').click() // Adiciona o segundo produto
    cy.get(':nth-child(4) > .pricebar > .btn_primary').click() // Adiciona o quarto produto
}

// Função para remover todos os produtos do carrinho clicando em botões específicos
function removerProdutos() {
    cy.get('.pricebar > .btn_secondary').each(($el) => { // Seleciona todos os botões de remoção
        cy.wrap($el).click();   // Envolve o elemento jQuery em um objeto Cypress e clica nele
    })
}

// Função para preencher os dados de checkout com informações específicas
function preencheDadosCheckout() {
    cy.get(SauceDemoElements.nome()).type('Teste'); // Preenche o campo nome
    cy.get(SauceDemoElements.sobrenome()).type('Teste 2'); // Preenche o campo sobrenome
    cy.get(SauceDemoElements.CEP()).type('58693256'); // Preenche o campo CEP
}

describe('Cenários Sauce Demo', () => {

    // Antes de cada teste, acessa a página de login
    beforeEach(() => {
        loginPage.acessoPagina();
    })

    // Testa login com usuário padrão e verifica se o login foi bem-sucedido
    it('Login com usuário padrão', () => {
        loginPage.loginStandardUser(); // Realiza o login com o usuário padrão
        loginPage.loginComSucesso();   // Verifica se o login foi bem-sucedido
    })

    // Testa login com usuário bloqueado e verifica se a mensagem de erro está visível
    it('Login com usuário com erro', () => {
        loginPage.loginLockedOut(); // Tenta fazer login com um usuário bloqueado
        cy.get(SauceDemoElements.msgError()).should('be.visible'); // Verifica se a mensagem de erro está visível
    })

    // Testa login com senha errada e verifica se a mensagem de erro está visível
    it('Login com usuário senha errada', () => {
        loginPage.loginPassError(); // Tenta fazer login com senha errada
        cy.get(SauceDemoElements.msgError()).should('be.visible'); // Verifica se a mensagem de erro está visível
    })

    // Testa a visualização dos produtos e verifica se as imagens têm o URL correto
    it('Visualizar produtos e verificar se existe foto', () => {
        loginPage.loginStandardUser(); // Realiza o login com o usuário padrão
        imagemCatalogo(); // Verifica se as imagens têm o URL correto
    })

    // Testa login com um usuário com problema e verifica se as imagens não têm o URL correto
    it('Logando com usuário com problema, e verificando se não existe foto', () => {
        loginPage.loginProblemUser(); // Realiza o login com um usuário com problema
        semImagemCatalogo(); // Verifica se as imagens não têm o URL correto
    })

    // Testa a adição de produtos ao carrinho e verifica se o contador de produtos está visível
    it('Adicionar produtos ao carrinho', () => {
        loginPage.loginStandardUser(); // Realiza o login com o usuário padrão
        adicionarCarrinho(); // Adiciona produtos ao carrinho
        cy.get(SauceDemoElements.contadorPrd()).should('be.visible'); // Verifica se o contador de produtos no carrinho está visível
    })

    // Testa a remoção de produtos do carrinho e verifica se o contador de produtos não está mais visível
    it('Remover produtos do carrinho', () => {
        loginPage.loginStandardUser(); // Realiza o login com o usuário padrão
        adicionarCarrinho(); // Adiciona produtos ao carrinho
        removerProdutos(); // Remove todos os produtos do carrinho
        cy.get(SauceDemoElements.contadorPrd()).should('not.exist'); // Verifica se o contador de produtos no carrinho não existe
    })

    // Testa o fluxo completo de finalização de compra e verifica se a mensagem de confirmação do pedido está visível
    it('Fluxo completo de finalização de compra', () => {
        loginPage.loginStandardUser(); // Realiza o login com o usuário padrão
        adicionarCarrinho(); // Adiciona produtos ao carrinho
        cy.get(SauceDemoElements.contadorPrd()).click(); // Clica no contador de produtos
        cy.get(SauceDemoElements.btnCheckoutFinish()).click(); // Inicia o checkout
        preencheDadosCheckout(); // Preenche os dados de checkout
        cy.get(SauceDemoElements.btnContinue()).click(); // Continua para a próxima etapa do checkout
        cy.get(SauceDemoElements.qtdCarrinho()).should('be.visible'); // Verifica se a quantidade de itens no carrinho está visível
        cy.get(SauceDemoElements.btnCheckoutFinish()).click(); // Finaliza o checkout
        cy.contains('THANK YOU FOR YOUR ORDER').should('be.visible'); // Verifica se a mensagem de confirmação do pedido está visível
    })
})
