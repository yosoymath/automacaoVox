// Criando classe de elementos, e definindo variáveis para os elementos contidos na aplicação para testes.

class LoginElements {
    inputUsername = () => {
        return '[data-test="username"]'; 
    }
    inputPassword = () => {
        return '[data-test="password"]';
    }
    btnLogin = () => {
        return '#login-button';
    }
    usrLogado = () => {
        return '.header_secondary_container';
    }
}

export default LoginElements