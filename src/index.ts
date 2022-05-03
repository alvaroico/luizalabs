import express from "express";
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');
app.use(express.json());

import homeRota from "./Routes/home";
import CEP from "./Routes/CEP";
import { JWTDecode } from "./Middleware/JWTDecode";

app.use("/", homeRota);
app.use("/CEP", JWTDecode('ChaveCEP'), CEP);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(8822, () => {
  console.log(`🙌😎 Servidor HTTP rodando porta: ${8822} 👌`);
});
