import express from "express";
const app = express();
app.use(express.json());

import homeRota from "./Routes/home";
import CEP from "./Routes/CEP";
import { JWTDecode } from "./Middleware/JWTDecode";

app.use("/", homeRota);
app.use("/CEP", JWTDecode('ChaveCEP'), CEP);

app.listen(8822, () => {
  console.log(`🙌😎 Servidor HTTP rodando porta: ${8822} 👌`);
});
