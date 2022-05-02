import { Request, Response, NextFunction } from "express";
import { QueryMYsql } from "../connection/Mysql";
import { cepbr_endereco } from "../interfaces/cepbr_endereco";

const Consulta = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { CEP } = request.query

  if (!CEP) {
    response.status(400).send("CEP não informado.");
    return;
  }

  const CEPLength = CEP.toString().length;

  if (CEPLength <= 5) {
    response.status(400).send("CEP inválido menor que 5 dígitos.");
    return;
  } else if (CEPLength === 6) {
    response.status(400).send("CEP inválido de 6 dígitos.");
    return;
  } else if (CEPLength === 7) {
    response.status(400).send("CEP inválido de 7 dígitos.");
    return;
  } else if (CEPLength === 8) {
    await QueryMYsql(`SELECT cep, logradouro, tipo_logradouro, complemento, 'local', id_cidade, id_bairro
    FROM db_luizalabs.cepbr_endereco WHERE cep = '01255010'
    `)
      .then((result) => {
        const MYsqlRetorno = result as cepbr_endereco[];
        
        response.status(200).send(MYsqlRetorno);

      })
      .catch((error) => {
        response.status(400).json({
          message: `Erro na consulta SQL ${error}`,
        });
      });
    return;
  } else {
    response.status(400).send("CEP inválido.");
    return;
  }
};

export default {
  Consulta: Consulta,
};
