# Clone do projeto 🐈

1. Abra o navegador
2. Acesse a URL que contém o [projeto de automação](https://github.com/yosoymath/automacaoVox).

> 👨‍🏫 É de extrema importância que você faça um clone do projeto em sua máquina, para, se necessário fazer as alterações em váriavéis, como: usuários, senhas, produtos...

3. Acessado o link do projeto, clique no botão **Code**, escolha uma opção de clone (HTTPS ou Github CLI) e copie o link de clone do projeto.

> 👨‍🏫 Eu dou preferência ao clone via HTTPS, pois considero mais prático.

4. Na pasta escolhida para armazenar o projeto de automação criada, clique com o botão direito na pasta, e escolha a opção `Open Git Bash here`.

![Na pasta](/document/image.png)

> 👨‍🏫 Se você não possuir o Git instalado, poderá instalar por este [link](https://git-scm.com/download/win).

5. Em seu terminal de linha de comando, execute o comando `git clone [cole-o-link-copiado-aqui]`.

6. Após o clone do projeto, acesse o diretório recém clonado (ex.: `cd automacaoVox/`).
___
## Instalação e inicialização do [Cypress](https://cypress.io) 🌲
1. Na raiz do projeto, execute o comando `npm install cypress` (ou `npm i cypress -D` para a versão curta)

2. Logo após, execute o comando `npx cypress open` para abrir o Cypress pela primeira vez.

3. Após executar o comando, e o _Test Runner_ estiver aberto, escolha a opção **_E2E Testing_**, em seguida, escolha o navegador de preferência para realizar os testes.

4. Após o navegador ser aberto, escolha a opção **Specs** na barra lateral esquerda, e em seguida escolha o projeto > Teste que queira executar.

5. Pronto! 🥳