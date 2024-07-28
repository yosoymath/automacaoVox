import LoginPage from "./login/login.cy";
import sauceDemoElements from "./sauceDemo";
import LoginElements from "./login/login";

const loginPage = new LoginPage();
const SauceDemoElements = new sauceDemoElements();
const loginElements = new LoginElements();

function imagemCatalogo() {
    cy.get(SauceDemoElements.foto()) // Obtém todos os elementos com o seletor fornecido
        .each(($el) => {
            cy.wrap($el)                 // Garante que estamos trabalhando com o elemento correto
                .should('have.attr', 'src', './img/bolt-shirt-1200x1500.jpg'); // Verifica o atributo 'src' da imagem
        });
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
            loginPage.acessoPagina();
            loginPage.loginStandardUser();
            imagemCatalogo();
    })
})



