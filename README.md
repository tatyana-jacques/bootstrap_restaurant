# Projeto Restaurante

Este projeto foi desenvolvido durante a disciplina "Desenvolvimento Web" da graduação em Análise e Desenvolvimento de Sistemas do Claretiano - Centro universitário.

## Sobre

O objetivo desse trabalho foi a criação de um site de um restaurante fictício por meio da utilização das ferramentas HTML5, CSS e JavaScript.

Para a construção do site, também foi utilizada a ferramenta Bootstrap, que consiste em uma biblioteca orientada a componentes para auxiliar na criação do layout da página.

As imagens utilizadas no projeto foram baixadas do site: https://www.pexels.com/pt-br (Acesso em 13 de outubro de 2024).

O logo do projeto foi editado a partir de uma imagem gerada pela inteligência artificial Gencraft, disponível em: https://gencraft.com/generate (Acesso em 13 de outubro de 2024).

## Tecnologias utilizadas

- HTML
- CSS
- JavaScript
- Bootstrap

## Páginas

### Home

![Print de home 1](/assets/prints/home1png.png)

![Print de home 2](/assets/prints/home2.png)

### Cardápio

Para a apresentação dos pratos do cardápio fictício foi utilizado o componente card do Bootstrap, contendo espaços para imagem, título e descrição. Para a construção da página de cardápio, foi utilizado o método fetch, via JavaScript, para buscar as informações no documento "menu.json" para o preenchimento dos cartões.

![Print de cardapio 1](/assets/prints/cardapio1.png)

![Print de cardapio 2](/assets/prints/cardapio2.png)

### Galeria

A página Galeria foi organizada a partir da estrutura grid do Bootstrap. Foi criada uma seção contendo a classe container e, dentro dessa, uma seção contendo a classe row (linha). Dentro da seção row são incluídas fotos por meio do método fetch construído via JavaScript. Esse método busca os dados no documento "gallery.json".

![Print de galeria 1](/assets/prints/galeria.png)

### Contato

Foram criadas validações para cada campo do formulário via JavaScript e utilizado um componente de alert do Bootstrap, para a confirmação de dados válidos e a impressão de mensagens na tela para o caso de mau preenchimento. Foram inseridas funções para verificar eventos de botão e de input (para quando o usuário clica fora do campo após ter clicado dentro e não preenchido). Foram criadas funções para verificar o preenchimento de cada um dos campos e uma função (checkForm())a ser chamada pelo botão Enviar contendo todas as funções de verificação dos campos e o alerta final de confirmação de dados válidos.

![Print de contato 1](/assets/prints/contato.png)

![Print de contato 2](/assets/prints/contato2.png)

## Como executar o projeto

Para que o site apresente todas as suas funcionalidades, é necessário que seja testado em algum servidor, caso contrário, os arquivos json com dados para as páginas Galeria e Cardápio não serão carregados e essas páginas não serão apresentadas corretamente. Durante seu desenvolvimento, o site foi testado com os servidores XAMPP e com o Live Server, do VSCode.

## Autora

Tatyana de Alencar Jacques

https://www.linkedin.com/in/tatyana-jacques/
