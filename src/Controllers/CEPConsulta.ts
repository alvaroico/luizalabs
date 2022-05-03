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
    const query = `SELECT
    cep,
    tipo_logradouro,
    logradouro,
    cb.bairro ,
    cidade,
    uf
  FROM
    db_luizalabs.cepbr_endereco ce
  INNER JOIN cepbr_cidade cc 
  ON
    ce.id_cidade = cc.id_cidade
  INNER JOIN cepbr_bairro cb 
  ON
    ce.id_bairro = cb.id_bairro
  WHERE
    ce.cep = '${cep}'`;
    return await QueryMYsql(query).then((result) => {
      const MYsqlRetorno = result as cepbr_endereco[];
      return MYsqlRetorno;
    });
  };

  const consultaCEPRecursivo = async (cep: string) => {
    let contador = 0;
    do {
      const dadosCEP = await consultaCEP(
        cep.slice(0, 8 - contador).padEnd(8, "0")
      );

      if (dadosCEP.length > 0) {
        return dadosCEP;
      } else {
        contador++;
      }
    } while (contador < 8);
    response.status(400).send("CEP não localizado.");
  };

  if (CEPLength <= 5) {
    response.status(400).send("CEP inválido menor que 5 dígitos.");
    return;
  } else if (CEPLength <= 8) {
    const codigoCEP = `${CEP}`;
    response.status(200).send(await consultaCEPRecursivo(codigoCEP));
    return;
  } else {
    response.status(400).send("CEP inválido.");
    return;
  }
};

export default {
  Consulta: Consulta,
};
