import { Request, Response, NextFunction } from "express";
import { QueryMYsql } from "../connection/Mysql";
import { cepbr_endereco } from "../interfaces/cepbr_endereco";

const Consulta = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { CEP } = request.query;

  if (!CEP) {
    response.status(400).send("CEP não informado.");
    return;
  }

  const CEPLength = CEP.toString().length;

  const consultaCEP = async (cep: string) => {
    const query = `SELECT cep, logradouro, tipo_logradouro, complemento, 'local', id_cidade, id_bairro
    FROM db_luizalabs.cepbr_endereco WHERE cep = '${cep}'`;
    await QueryMYsql(query)
      .then((result) => {
        const MYsqlRetorno = result as cepbr_endereco[];

        if (MYsqlRetorno.length === 0) {
          response.status(400).send("CEP não encontrado.");
        } else {
          response.status(200).send(MYsqlRetorno);
        }
      })
      .catch((error) => {
        response.status(400).json({
          message: `Erro na consulta SQL ${error}`,
        });
      });
    return;
  };

  if (CEPLength <= 5) {
    response.status(400).send("CEP inválido menor que 5 dígitos.");
    return;
  } else if (CEPLength === 6) {
    const codigoCEP = `${CEP + "0" + "0"}`;
    consultaCEP(codigoCEP);
    return;
  } else if (CEPLength === 7) {
    const codigoCEP = `${CEP + "0"}`;
    consultaCEP(codigoCEP);
    return;
  } else if (CEPLength === 8) {
    const codigoCEP = `${CEP}`;
    consultaCEP(codigoCEP);
    return;
  } else {
    response.status(400).send("CEP inválido.");
    return;
  }
};

export default {
  Consulta: Consulta,
};
