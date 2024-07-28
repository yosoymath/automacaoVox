import LoginElements from "./login";
const loginElements = new LoginElements();

class LoginPage {

  // Configura o ambiente e acessa a página inicial do site
  acessoPagina() {

    // Configuração de viewport para 1920x1080
    cy.viewport(1920, 1080);

    // Carrega dados do fixture e desativa erros não capturados
    cy.fixture("dados").then(({ urlBase }) => {
      Cypress.on('uncaught:exception', () => false);
      
      // Visita a página inicial com um timeout de 15 segundos
      cy.visit(urlBase, { timeout: 15000 });
    })
  }

  // Realiza o login com um usuário padrão e senha
  loginStandardUser() {
    cy.fixture("dados").then(({ standardUser, password }) => {
      cy.get(loginElements.inputUsername()).type(standardUser)
      cy.get(loginElements.inputPassword()).type(password)

      // Clica no botão de login
      cy.get(loginElements.btnLogin()).click();
    });
  }

  // Realiza o login com um usuário padrão e uma senha incorreta
  loginPassError() {
    cy.fixture("dados").then(({ standardUser, password_error }) => {
      cy.get(loginElements.inputUsername()).type(standardUser)
      cy.get(loginElements.inputPassword()).type(password_error)

      // Clica no botão de login
      cy.get(loginElements.btnLogin()).click();
    });
  }

  // Realiza o login com um usuário bloqueado
  loginLockedOut() {
    cy.fixture("dados").then(({ lockedOutUser, password }) => {
      cy.get(loginElements.inputUsername()).type(lockedOutUser)
      cy.get(loginElements.inputPassword()).type(password)

      // Clica no botão de login
      cy.get(loginElements.btnLogin()).click();
    });
  }

  // Realiza o login com um usuário com problemas
  loginProblemUser() {
    cy.fixture("dados").then(({ problemUser, password }) => {
      cy.get(loginElements.inputUsername()).type(problemUser)
      cy.get(loginElements.inputPassword()).type(password)

      // Clica no botão de login
      cy.get(loginElements.btnLogin()).click();
    });
  }

  // Realiza o login com um usuário com problemas de desempenho
  loginperformanceGlitchUser() {
    cy.fixture("dados").then(({ performanceGlitchUser, password }) => {
      cy.get(loginElements.inputUsername()).type(performanceGlitchUser)
      cy.get(loginElements.inputPassword()).type(password)

      // Clica no botão de login
      cy.get(loginElements.btnLogin()).click();
    });
  }

  // Verifica se o login foi bem-sucedido e limpa o cookie da sessão
  loginComSucesso() {
    
    cy.wait(1000) // Aguarda 1 segundo

    // Verifica se o elemento que indica login bem-sucedido está visível
    cy.get(loginElements.usrLogado(), { timeout: 30000 }).should('be.visible');

    // Limpa o cookie da sessão
    cy.clearCookie('session_id');
  }
}


export default LoginPage;