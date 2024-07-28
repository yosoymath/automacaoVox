// Classe que contém seletores para elementos da página de login

class LoginElements {
    
    // Retorna o seletor para o campo de entrada do nome de usuário
    inputUsername = () => {
        return '[data-test="username"]'; 
    }

    // Retorna o seletor para o campo de entrada da senha
    inputPassword = () => {
        return '[data-test="password"]';
    }

    // Retorna o seletor para o botão de login
    btnLogin = () => {
        return '#login-button';
    }

    // Retorna o seletor para o elemento que indica que o usuário está logado
    usrLogado = () => {
        return '.header_secondary_container';
    }
}


export default LoginElements