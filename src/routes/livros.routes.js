import {
    CriarLivros,
    buscarLivros,
    listarLivros,
    AtualizarLivros,
    DeletarLivros
} from "../controllers/livros.controller.js";

import express from "express";

const routes = express.Router();
routes.get("/", listarLivros)
routes.post("/", CriarLivros)
routes.get("/:id", buscarLivros)
routes.put("/:id", AtualizarLivros)
routes.delete("/:id", DeletarLivros)

export default routes;