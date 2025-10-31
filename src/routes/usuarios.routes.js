import {
    CriarUsuario,
    ListaUsuario,
    ObterUsuario,
    AtualizaUsuario,
    DeletarUsuario
} from "../controllers/usuarios.controllers.js";

import express from "express";

const routes = express.Router();
routes.get("/", ListaUsuario);
routes.post("/", CriarUsuario)
routes.get("/", ObterUsuario)
routes.put("/", AtualizaUsuario)
routes.delete("/", DeletarUsuario)

export default routes;