Desafio Técnico Luizalabs.
Desenvolvedor Full Stack Senior.

1 - Expor um serviço de BUSCA DE CEP
Eu, como usuário, quero informar meu CEP e obter o nome da minha
✅ RUA, 
✅ BAIRRO, 
✅ CIDADE e 
✅ ESTADO 
para preencher meus dados de cadastro de forma automática.
Os critérios de aceite dessa história são:

✅ Dado um CEP válido, deve retornar o endereço correspondente
✅ Dado um CEP válido, que não exista o endereço, deve substituir um dígito da direita para a esquerda por zero até que o endereço seja localizado (Exemplo: Dado 22333999 tentar com 22333990, 22333900 …)
✅ Dado um CEP inválido, deve retornar uma mensagem reportando o erro: "CEP inválido"O que se espera para as questões 1  - dicas e direcionamentos:
✅ Os serviços devem receber e responder JSON;
Faça o uso de Mocks principalmente nos testes;
Os dados dos CEPs podem ser "Mocados";
Pense em como documentar os cenários desenvolvidos (Testes sempre são uma boa forma de documentar);
Ao finalizar o desenvolvimento você pode compartilhar o código pelo Github ou de outra maneira que preferir (como arquivo compactado). Se possível, em caso de arquivo compactado, envie o mesmo para um virtual drive e compartilha o link na prova;
Fique a vontade para entrar em contato e tirar dúvidas;
Juntamente com o Código, deve-se documentar a estratégia utilizada para a criação da aplicação, a arquitetura utilizada e os padrões. A documentação pode ser feita via GIT/Bitbucket ou adicionado no HackerRank. Isto faz parte da avaliação da prova.
Em caso de uso do Git/Bitbucket não esqueça de criar o .gitignore.


Extras:

✅ Preferencialmente use um versionador e faça commits granulares;
✅ Api com autorização;
🔑 JWT - eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjcmlhY2FvIjoxNjUxNTI2MTI5MDAwLCJjbGllbnRlIjoiQ2hhdmVDRVAiLCJleHBpcmFjYW8iOjE2OTE2MjYxMjkwMDB9.0B-xAlVjPcEloNeSiUiRVtwF6fFn38mv5L8lj9QYW00
✅ Boas práticas de design de api;
Swagger com a documentação;
Tecnologias preferenciais: java ou node.js - justifique, no readme a escolha da tecnologia.


Extras plus plus master (não é mandatório, apenas diferencial se vc tiver tempo e conhecimento):

Logs estruturados;
Endpoint para saúde da aplicação;
Endpoint para métricas da aplicação;
Considere a performance do algoritmo e o tempo de resposta da aplicação, sabendo que a API  pode receber flutuações de tráfego agressivas.


2 - Quando você digita a URL de um site (http://www.netshoes.com.br) no browser e pressiona enter, explique da forma que preferir, o que ocorre nesse processo do protocolo HTTP entre o Client e o Server.
O que espera-se como resposta - Dicas e direcionamentos:

Detalhe sua linha de raciocínio;
Elabore um plano de entendimento, por exemplo, lista, de forma a elencar os passos;
Não copie conteúdo da internet, responda com suas palavras.