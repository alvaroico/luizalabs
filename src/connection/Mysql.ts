import mysql, { OkPacket } from "mysql";

export const poolMYsql = mysql.createPool({
  connectionLimit: 10,
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
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
