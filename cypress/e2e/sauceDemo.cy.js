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
    cy.get('.fa-layers-counter').should('be.visible');
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
    })
})