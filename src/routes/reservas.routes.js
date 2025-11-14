import express from "express";
import { criarReserva, excluirReserva, listarReservas } from "../controllers/reservas.controller.js"

const router = express.Router();

router.get('/', listarReservas);
router.post('/', criarReserva);
router.delete('/:id', excluirReserva);

export default router;