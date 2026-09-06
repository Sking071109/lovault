// routes/loot.routes.js
// Esta capa ya está correcta — no la toques.

const express = require("express");
const router = express.Router();
const lootController = require("../controllers/loot.controller");

router.post("/valor-inventario", lootController.obtenerValorInventario);
router.post("/item-mas-raro", lootController.obtenerItemMasRaro);
router.post("/conteo-legendarios", lootController.obtenerConteoLegendarios);
router.post("/drop-rate-promedio", lootController.obtenerDropRatePromedio);

module.exports = router;
