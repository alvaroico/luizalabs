import express, { Request, Response, NextFunction } from "express";
const router = express.Router();
import CEP from "../Controllers/CEPConsulta";

router.get(
  "/",
  function (request: Request, response: Response, next: NextFunction) {
    response.send("Rota CEP");
  }
);
router.get("/Consulta", CEP.Consulta);

export default router;
