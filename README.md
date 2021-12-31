![aula1-vídeo4-imagem1](https://user-images.githubusercontent.com/70352508/147787455-1d763b5d-f48d-45af-ac14-e1a98de40f51.png)

<h1> Essa API foi desenvolvida no curso "ORM com NodeJS" da platarfoma Alura </h1>
<h3> O que é ORM? </h3>
Mapeamento objeto-relacional é uma técnica de desenvolvimento utilizada para reduzir a impedância da programação orientada aos objetos 
utilizando bancos de dados relacionais. 
<hr>
<h2> Foi utilizada a arquitetura MVC </h2>

O MVC funciona como um padrão de arquitetura de software que melhora a conexão entre as camadas de dados, lógica de negócio e interação com usuário. Por padrão existem a camada Model, Controller e View que deram origem a sigla dessa arquitetura de software mais utilizado entre os desenvolvedores.

![mvc](https://user-images.githubusercontent.com/70352508/147787644-2840a0cd-d116-49b0-a478-e3a594266e67.PNG)

# Requisitos:

O cliente não gostaria que registros importantes do sistema, como as Pessoas, sejam apagados definitivamente do banco de dados.<br>

Para deixar a interface mais limpa, o cliente gostaria que na lista de Pessoas, por padrão, fossem exibidos somente os usuários ativos.<br>

Foram percebidas algumas falhas de validação dos formulários por parte do front-end, o que resultou em dados de email inválidos no banco. É desejável que essa validação não seja responsabilidade exclusiva do front.<br>

É importante poder consultar todas as matrículas confirmadas referentes a estudante X de forma rápida.<br>

O cliente gostaria de poder consultar as turmas abertas por intervalo de data, para não receber informações desnecessárias (como turmas antigas).<br>

O cliente quer poder consultar as matrículas por turma e saber quais delas estão lotadas, para organizar melhor as matrículas.<br>

O cliente gostaria que, uma vez que o cadastro de um estudante fosse desativado, todas as matrículas relativas a este estudante automaticamente passassem a constar como “canceladas”.<br>

Durante o projeto vamos analisar esta lista e transformar esses requisitos em novas funcionalidades.
