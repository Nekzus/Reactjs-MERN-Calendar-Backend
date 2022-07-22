/*
  Events Routes
  /api/events
*/

const { Router } = require("express");
const { jwtValidator } = require("../middlewares/jwt-validator");

const {
  getEvent,
  createEvent,
  updateEvent,
  deleteEvent,
} = require("../controllers/events");

const router = Router();

// Todas tienen que pasar la validacion de jwt
router.use(jwtValidator);

// Obtener evento
router.get("/", getEvent);

// Crear un nuevo evento
router.post("/", createEvent);

// Actualizar evento
router.put("/:id", updateEvent);

// Eliminar evento
router.delete("/:id", deleteEvent);

module.exports = router;
