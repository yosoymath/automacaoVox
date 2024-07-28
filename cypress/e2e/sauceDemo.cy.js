import LoginPage from "./login/login.cy";
import sauceDemoElements from "./sauceDemo";
import LoginElements from "./login/login";

const loginPage = new LoginPage();
const SauceDemoElements = new sauceDemoElements();

function imagemCatalogo() {
    cy.get(SauceDemoElements.foto()) // Obtém todos os elementos com o seletor fornecido
        .each(($el) => {
            cy.wrap($el)                 // Garante que estamos trabalhando com o elemento correto
                .should('have.attr', 'src', './img/bolt-shirt-1200x1500.jpg'); // Verifica o atributo 'src' da imagem
        });
}
function adicionarCarrinho() {
    cy.get(':nth-child(1) > .pricebar > .btn_primary').click()
    cy.get(':nth-child(2) > .pricebar > .btn_primary').click()
    cy.get(':nth-child(4) > .pricebar > .btn_primary').click()
}
function removerProdutos() {
    cy.get('.pricebar > .btn_secondary').each(($el) => { // Itera sobre cada elemento encontrado.
        cy.wrap($el).click();   // Envolve o elemento jQuery em um objeto Cypress e clica nele.
    })
}
function preencheDadosCheckout (){
    cy.get(SauceDemoElements.nome()).type('Teste');
    cy.get(SauceDemoElements.sobrenome()).type('Teste 2');
    cy.get(SauceDemoElements.CEP()).type('58693256');
}

describe('Cenários Sauce Demo', () => {

    beforeEach(() => {
        loginPage.acessoPagina();
    })

    it('Login com usuário padrão', () => {
        loginPage.loginStandardUser();
        loginPage.loginComSucesso();
    });

    it('Login com usuário com erro', () => {
        loginPage.loginLockedOut();
        cy.get(SauceDemoElements.msgError()).should('be.visible');
    });

    it('Visualizar produtos e verificar se existe foto', () => {
        loginPage.loginStandardUser();
        imagemCatalogo();
    })

    it('Logando com usuário com problema, e verificando se existe foto', () => {
        //Teste irá dar erro, porque a validação é para saber se tem foto, como com esse usuário não tem, então teste não irá passar.

        loginPage.loginProblemUser();
        imagemCatalogo();
    })

    it('Adicionar produtos ao carrinho', () => {
        //Função de login
        loginPage.loginStandardUser();

        //Função para adicionar produtos ao carrinho
        adicionarCarrinho();

        //Assert para saber se os produtos foram adicionados
        cy.get(SauceDemoElements.contadorPrd()).should('be.visible');
    })

    it('Remover produtos do carrinho', () => {
        loginPage.loginStandardUser();
        adicionarCarrinho();

        //Função para remover produtos do carrinho
        removerProdutos();

        //Assert para saber não existe o elemento de contador no carrinho
        cy.get(SauceDemoElements.contadorPrd()).should('not.exist');
    })
    
    it.only('Fluxo completo de finalização de compra', () =>{
        loginPage.loginStandardUser();
        adicionarCarrinho();

        cy.get(SauceDemoElements.contadorPrd()).click();
        cy.get(SauceDemoElements.btnCheckoutFinish()).click();

        preencheDadosCheckout();

        cy.get(SauceDemoElements.btnContinue()).click();

        cy.get(SauceDemoElements.qtdCarrinho()).should('be.visible')
        cy.get(SauceDemoElements.btnCheckoutFinish()).click();

        cy.contains('THANK YOU FOR YOUR ORDER').should('be.visible')
    })
})