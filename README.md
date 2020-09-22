<h1 align="center">
  <img alt="NetflixClone" title="NetflixClone" src=".github/logo.svg" width="400px" />
</h1>

<h4 align = "center">
  Cópia da principal interface da plataforma de streaming <a href="https://www.netflix.com/">Netflix</a>
</h4>

<p align="center">
  <img alt="Interface da aplicação" src=".github/screenshot.png" width="100%">
</p>

<p align="center">
  <img alt="Funcionamento da aplicação" src=".github/demo.gif" width="100%">
</p>

## :rocket: Tecnologias

-  [React.js](https://pt-br.reactjs.org/)
-  [TypeScript](https://www.typescriptlang.org/)
-  [React-icons](https://react-icons.netlify.com/)
-  [Styled-Components](https://styled-components.com/)
-  [Axios](https://github.com/axios/axios)

## 💻 Sobre o projeto

Recriar a interface do [Netflix](https://www.netflix.com/) como forma de aprendizagem e treinar as skills perante o uso de TypeScript, ReactJS e CSS. A ideia de criar esse projeto partiu apartir deste [vídeo](https://www.youtube.com/watch?v=tBweoUiMsDg&ab_channel=BoniekyLacerda).

Para realizar a listagem dos filmes/séries foi utilizado a api do [TMDb API](https://www.themoviedb.org/documentation/api), nela cada item possui diversos atributos como a capa, nome, descrição, avaliação, categorias, foto de background.

### Funcionalidades Criadas

**Loading Api:** Criando um efeito spinning ao trazer os dados da API, ao usar o *@keyframes* para manipular as propriedades translate() e rotate() do transform.

**Cartão Filme:** É monitorado o evento *hover* na capa do filme, com ele ativo é mostrado um cartão com detalhes do filme/série. Propriedades do css manipuladas: *z-index*, *opacity*, *transition*, *position* e *transform*.

**Carrossel:** Para listar cada filme/série nas sessões é criado um carrosel e existe dois botões para controlar a lista.

## 📥 Instalação e execução

Faça um clone desse repositório e acesse o diretório.

```bash
$ git clone git@github.com:LeeonardoVargas/netflix-clone.git && cd netflix-clone
```

Para ter acesso a API você precisará de uma chave, basta criar uma conta no TMDB para ter acesso, [link do cadastro](https://www.themoviedb.org/signup). Caminho da chave: **Perfil -> Configurações -> API -> Chave da API**

Renomei o arquivo `.env.example` para `.env` e cole o valor da sua chave nele no campo **REACT_APP_API_KEY**. Agora instale as dependências e execute o projeto:

```bash
# Instalando as dependências
$ yarn

# Executanto aplicação
$ yarn start
```

## :muscle: Contribuir

Faça o `fork` e clone o projeto a partir do seu usuário.

```bash
$ git clone https://github.com/SEU-NOME-DE-USUARIO/fast-feet.git
```
Gere uma nova ramificação do projeto, no exemplo a seguir vou chamar o branch de `minha-alteracao`, mas você pode dar o nome que quiser.

```bash
# Criando um branch
$ git branch minha-alteracao
# Acessando o novo branch
$ git checkout -b minha-alteracao
```

Faça as alterações necessárias e o push para a branch.

```bash
# Adicionando os arquivos alterados
$ git add .
# Mensagem do commit
$ git commit -m "Corrigindo...."
# Enviando alterações para o brach
$ git push origin minha-alteracao
```
Por último e não menos importante, você deve navegar até o seu repositório onde fez o fork e clicar no botão *New pull request* no lado esquerdo da página.

## 📝 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.
