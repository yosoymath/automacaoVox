import LoginElements from "./login";
const loginElements = new LoginElements();

class LoginPage {

  acessoPagina() {
    // Configuração de viewport
    cy.viewport(1920, 1080);

    // Carregando os dados do fixture
    cy.fixture("dados").then(({ urlBase }) => {

      // Desativando o erro não capturado
      Cypress.on('uncaught:exception', () => false);

      // Visitando a página inicial
      cy.visit(urlBase, { timeout: 15000 });
    })
  }

  loginStandardUser() {
    cy.fixture("dados").then(({ standardUser, password }) => {
      cy.get(loginElements.inputUsername()).type(standardUser)
      cy.get(loginElements.inputPassword()).type(password)

      cy.get(loginElements.btnLogin()).click();
    });
  }

  loginLockedOut() {
    cy.fixture("dados").then(({ lockedOutUser, password }) => {
      cy.get(loginElements.inputUsername()).type(lockedOutUser)
      cy.get(loginElements.inputPassword()).type(password)

      cy.get(loginElements.btnLogin()).click();
    });
  }

  loginProblemUser() {
    cy.fixture("dados").then(({ problemUser, password }) => {
      cy.get(loginElements.inputUsername()).type(problemUser)
      cy.get(loginElements.inputPassword()).type(password)

      cy.get(loginElements.btnLogin()).click();
    });
  }

  loginperformanceGlitchUser() {
    cy.fixture("dados").then(({ performanceGlitchUser, password }) => {
      cy.get(loginElements.inputUsername()).type(performanceGlitchUser)
      cy.get(loginElements.inputPassword()).type(password)

      cy.get(loginElements.btnLogin()).click();
    });
  }

  loginComSucesso() {
    cy.wait(1000)

    cy.get(loginElements.usrLogado(), { timeout: 30000 }).should('be.visible');

    cy.clearCookie('session_id');

  }
}

export default LoginPage;