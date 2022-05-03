require('dotenv').config()
import supertest from "supertest";
const appServer = require("./server");

describe("Super Teste de Rotas", () => {
  it("Arquivo Log", async () => {
    const res = await supertest(appServer).get("/log/express.log");
    expect(res.type).toEqual("text/plain");
    expect(res.statusCode).toEqual(200);
  });
  it("Rota Home", async () => {
    const res = await supertest(appServer).get("/");
    expect(res.text).toEqual("Rota Home");
    expect(res.statusCode).toEqual(200);
  });
  it("Rota CEP Não identificado Token", async () => {
    const res = await supertest(appServer).get("/CEP");
    expect(res.text).toEqual("Não identificado Token");
    expect(res.statusCode).toEqual(401);
  });
  it("Rota CEP Home", async () => {
    const res = await supertest(appServer)
      .get("/CEP")
      .set(
        "Authorization",
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjcmlhY2FvIjoxNjUxNTI2MTI5MDAwLCJjbGllbnRlIjoiQ2hhdmVDRVAiLCJleHBpcmFjYW8iOjE2OTE2MjYxMjkwMDB9.0B-xAlVjPcEloNeSiUiRVtwF6fFn38mv5L8lj9QYW00"
      );
    expect(res.text).toEqual("Rota CEP");
    expect(res.statusCode).toEqual(200);
  });
  it("Rota CEP Valido", async () => {
    const res = await supertest(appServer)
      .get(`/CEP/Consulta?CEP=01255010`)
      .set(
        "Authorization",
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjcmlhY2FvIjoxNjUxNTI2MTI5MDAwLCJjbGllbnRlIjoiQ2hhdmVDRVAiLCJleHBpcmFjYW8iOjE2OTE2MjYxMjkwMDB9.0B-xAlVjPcEloNeSiUiRVtwF6fFn38mv5L8lj9QYW00"
      );
    expect(res.body).toEqual([
      {
        cep: "01255010",
        tipo_logradouro: "Rua",
        logradouro: "Antonina",
        bairro: "Sumaré",
        cidade: "São Paulo",
        uf: "SP",
      },
    ]);
    expect(res.statusCode).toEqual(200);
  });

  it("Rota CEP Menor que 6", async () => {
    const res = await supertest(appServer)
      .get(`/CEP/Consulta?CEP=01255`)
      .set(
        "Authorization",
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjcmlhY2FvIjoxNjUxNTI2MTI5MDAwLCJjbGllbnRlIjoiQ2hhdmVDRVAiLCJleHBpcmFjYW8iOjE2OTE2MjYxMjkwMDB9.0B-xAlVjPcEloNeSiUiRVtwF6fFn38mv5L8lj9QYW00"
      );
    expect(res.text).toEqual("CEP inválido menor que 5 dígitos.");
    expect(res.statusCode).toEqual(400);
  });

  it("Rota CEP superior a 6 menor que 9", async () => {
    const res = await supertest(appServer)
      .get(`/CEP/Consulta?CEP=021380`)
      .set(
        "Authorization",
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjcmlhY2FvIjoxNjUxNTI2MTI5MDAwLCJjbGllbnRlIjoiQ2hhdmVDRVAiLCJleHBpcmFjYW8iOjE2OTE2MjYxMjkwMDB9.0B-xAlVjPcEloNeSiUiRVtwF6fFn38mv5L8lj9QYW00"
      );
    expect(res.body).toEqual([
      {
        cep: "02138000",
        tipo_logradouro: "Praça",
        logradouro: "Lourenço Billis",
        bairro: "Vila Sabrina",
        cidade: "São Paulo",
        uf: "SP",
      },
    ]);
    expect(res.statusCode).toEqual(200);
  });
  it("Rota CEP superior a 9", async () => {
    const res = await supertest(appServer)
      .get(`/CEP/Consulta?CEP=123456789`)
      .set(
        "Authorization",
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjcmlhY2FvIjoxNjUxNTI2MTI5MDAwLCJjbGllbnRlIjoiQ2hhdmVDRVAiLCJleHBpcmFjYW8iOjE2OTE2MjYxMjkwMDB9.0B-xAlVjPcEloNeSiUiRVtwF6fFn38mv5L8lj9QYW00"
      );
    expect(res.text).toEqual("CEP inválido.");
    expect(res.statusCode).toEqual(400);
  });
  it("Rota CEP | CEP não localizado.", async () => {
    const res = await supertest(appServer)
      .get(`/CEP/Consulta?CEP=023570`)
      .set(
        "Authorization",
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjcmlhY2FvIjoxNjUxNTI2MTI5MDAwLCJjbGllbnRlIjoiQ2hhdmVDRVAiLCJleHBpcmFjYW8iOjE2OTE2MjYxMjkwMDB9.0B-xAlVjPcEloNeSiUiRVtwF6fFn38mv5L8lj9QYW00"
      );
    expect(res.text).toEqual('CEP não localizado.');
    expect(res.statusCode).toEqual(400);
  });
});
