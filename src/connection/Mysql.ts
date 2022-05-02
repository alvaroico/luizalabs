import mysql, { OkPacket } from "mysql";

export const poolMYsql = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "alvaro",
  password: "alvaro",
  database: "db_luizalabs",
});

export { OkPacket };

export const QueryMYsql = (query: string) => {
  return new Promise((resolve, reject) => {
    poolMYsql.query(query, function (error, results: [] | OkPacket, fields) {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};
