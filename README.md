Desafio Técnico Luizalabs.
Desenvolvedor Full Stack Senior.

1 - Expor um serviço de BUSCA DE CEP
Eu, como usuário, quero informar meu CEP e obter o nome da minha

✅ RUA, 

✅ BAIRRO, 

✅ CIDADE

✅ ESTADO 

```
[
    {
        "cep": "01255010",
        "tipo_logradouro": "Rua",
        "logradouro": "Antonina",
        "bairro": "Sumaré",
        "cidade": "São Paulo",
        "uf": "SP"
    }
]
```

para preencher meus dados de cadastro de forma automática.

Os critérios de aceite dessa história são:

✅ Front 
  # http://localhost:8822/index/


✅ Dado um CEP válido, deve retornar o endereço correspondente
![Tux, the Linux mascot](/anexos/index.png)

✅ Dado um CEP válido, que não exista o endereço, deve substituir um dígito da direita para a esquerda por zero até que o endereço seja localizado (Exemplo: Dado 22333999 tentar com 22333990, 22333900 …)

![Tux, the Linux mascot](/anexos/faltando2digitos.png)

✅ Dado um CEP inválido, deve retornar uma mensagem reportando o erro: "CEP inválido"O que se espera para as questões 1  - dicas e direcionamentos:

![Tux, the Linux mascot](/anexos/cepInvalido.png)

✅ Os serviços devem receber e responder JSON;

✅ Faça o uso de Mocks principalmente nos testes;

✅ Os dados dos CEPs podem ser "Mocados";

![Tux, the Linux mascot](/anexos/dadosCEP.png)

✅ Pense em como documentar os cenários desenvolvidos (Testes sempre são uma boa forma de documentar);

- Foi efetuado o Super Teste de Rotas
  
  ![Tux, the Linux mascot](/anexos/SuperTesteRotas.gif)

✅ Ao finalizar o desenvolvimento você pode compartilhar o código pelo Github ou de outra maneira que
   preferir (como arquivo compactado). Se possível, em caso de arquivo compactado, envie o mesmo para um virtual drive e compartilha o link na prova;

✅ Fique a vontade para entrar em contato e tirar dúvidas;

✅ Juntamente com o Código, deve-se documentar a estratégia utilizada para a criação da aplicação, a arquitetura utilizada e os padrões. A documentação pode ser feita via GIT/Bitbucket ou adicionado no HackerRank. Isto faz parte da avaliação da prova.

✅ Em caso de uso do Git/Bitbucket não esqueça de criar o .gitignore.

Extras:

✅ Preferencialmente use um versionador e faça commits granulares;

✅ Api com autorização;
🔑 JWT - eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjcmlhY2FvIjoxNjUxNTI2MTI5MDAwLCJjbGllbnRlIjoiQ2hhdmVDRVAiLCJleHBpcmFjYW8iOjE2OTE2MjYxMjkwMDB9.0B-xAlVjPcEloNeSiUiRVtwF6fFn38mv5L8lj9QYW00

✅ Boas práticas de design de api;

✅ Swagger com a documentação;
  # http://localhost:8822/api-docs/

![Tux, the Linux mascot](/anexos/Swagger.gif)

1 - Tecnologias preferenciais: java ou node.js - justifique, no readme a escolha da tecnologia.

- Fiz a escolha pelo Node.js por ter um código menos verboso para a aplicação solicitada trazendo mais leveza na criação do Microsserviços porém não tem grandes recursos consolidados de Logs diretamente integrado como o Java.

Extras plus plus master (não é mandatório, apenas diferencial se vc tiver tempo e conhecimento):

✅ Logs estruturados;
  # http://localhost:8822/log/express.log

![Tux, the Linux mascot](/anexos/logs.png)

✅ Endpoint para saúde da aplicação; 
- Cada log tem a saúde da aplicação 
  
✅ Endpoint para métricas da aplicação; 
- Cada log tem a saúde da aplicação 

✅ Considere a performance do algoritmo e o tempo de resposta da aplicação, sabendo que a API  pode receber flutuações de tráfego agressivas. 
  - Pode ser verificado no Response: contido no express.log


2 - Quando você digita a URL de um site (http://www.netshoes.com.br) no browser e pressiona enter, explique da forma que preferir, o que ocorre nesse processo do protocolo HTTP entre o Client e o Server.

- Servidor DNS e consultado no qual retorna o endereço de IP físico
- Navegador abre a IP físico na porta 80 para páginas HTTP e 443 para páginas HTTPS sendo que os navegadores modernos atuais vão suportar apenas páginas HTTPS.
- O navegador recebe a resposta da porta no respectivo protocolo no qual pode ter havido um pré-processamento na geração da página do lado do servidor como também o navegador pode receber o código e processar localmente na renderização do navegador que executa em tempo de leitura do código sendo que este código pode requisitar outros códigos através dos métodos GET, POST, PUT, DELETE entre outros métodos 
- Com os códigos carregados e renderizado na tela do usuário liberando para o uso.


O que espera-se como resposta - Dicas e direcionamentos:

Detalhe sua linha de raciocínio;
Elabore um plano de entendimento, por exemplo, lista, de forma a elencar os passos;
Não copie conteúdo da internet, responda com suas palavras.