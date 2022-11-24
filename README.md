# Books Collection - 92

## Aplicativo para controle de biblioteca pessoal

![Tela inicial do aplicativo](/docs/images/home-page.png)

Neste projeto construímos um aplicativo web para controle de biblioteca pessoal que permite o
cadastro de informações sobre seus livros e o status de leitura de cada um deles.
O aplicativo implementa três diferentes listas de livros :

- **Lendo**: para a relação de livro que você está lendo atualmente, podendo guardar a página em que parou de ler e outras informações.
- **Quero ler**: com as informações de livros que você tem interesse em ler futuramente. O aplicativo permite fazer buscas de livros no **Google Books** e importar os respectivos dados diretamente para a base do aplicativo.
- **Lido**: guarda a realação de livros que já foram lidos, e, entre outras informações, permite armazenar sua avaliação (rating) pessoal do livro que leu.

## Equipe

Nosso time neste projeto foi composto pelas seguintes pessoas desenvolvedoras:

- Ewerton Vaz
- Priscila Franco
- Rodrigo Monclair
- Roberto Malheiros

Agradecimento especial a professora **Karen Okasaki** que, com suas aulas excelentes, repassou todo o conhecimento necessário para criarmos este aplicativo.

## Projeto 2

O aplication **Books collection - 92** foi criado como o segundo projeto do bootcamp Iron Hack Web Development - Full time - ENAP / 2022 - Turma 92.

## Links

Este projeto está disponível nos seguintes Links:

**Deploy** : [https://books-collection-92.netlify.app/](https://books-collection-92.netlify.app/)

**Git Hub** : [https://github.com/ewertonvaz/books-collection-92](https://github.com/ewertonvaz/books-collection-92)

**Apresentação** : [https://bit.ly/3GJ3F1c](https://bit.ly/3GJ3F1c)

# Instalação

Para instalar o aplicativo execute os comandos:

`git clone https://github.com/ewertonvaz/books-collection-92.git`

`cd books-collection-92`

`npm install`

`npm start`

Após este último comando o aplicativo estará disponível na URL [http://localhost:3000](http://localhost:3000) .

**Atenção !** este projeto ainda _não é multitenant_, de forma que ao seguir os passos acima e acessar o aplicativo serão exibidos os livro cadastrados por todas as pessoas que já utilizaram este programa e não apenas os que forem cadastrados por você.

## Estrutura das pastas

Na pasta _docs_ estão as imagens e documentos utilizados neste aquivo README.md.

Utilizamos a estrutura de pastas padrão do React e gravamos os arquivos na pastas _src_ e nela criamos algumas subpastas seguindo a convenção que a professora nos mostrou durante as aulas.

Na raíz da pasta _assets_ estão as imagens utilizadas neste projeto, também existem as subpastas _epubs_ e _pdf_, onde estão, alguns arquivos de e-books que foram utilizados no projeto durante as fases de teste.

A pasta _components_ armazena o código fonte dos Componentes React criados para este projeto. Utilizamos o recurso de **CSS Module** para criar um arquivo de CSS para cada componente. Assim, p.ex. os arquivos **BookEpub.css** e **BookEpub.jsx** se referem ao mesmo componente, sendo o primeiro arquivo os códigos CSS e o segundo seu código fonte em JS.

Nesta pasta existe uma subpasta com o nome _shared_ que armazena os componentes comuns que podem ser usados para compor outros componentes e/ou páginas do aplicativo.
Um exemplo é o componente **Rating** (estrelas) que foi utilzido em várias telas do aplicativo.

Finalmente temos a pasta _pages_ que contém a implementação de todas as telas do aplicativo.
