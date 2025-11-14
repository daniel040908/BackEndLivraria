import express from "express";
import {
    criarFavorito,
    excluirFavorito,
    listarFavoritos
}
from "../controllers/favoritos.controller.js"
import { listarFavoritosPorUsuario } from "../controllers/favoritos.controller.js";
const router = express.Router();



router.get('/', listarFavoritos);
router.post('/', criarFavorito);
router.delete('/', excluirFavorito);
router.get("/usuario/:id", listarFavoritosPorUsuario);
export default router;