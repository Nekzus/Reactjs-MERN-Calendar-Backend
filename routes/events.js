/*
  Events Routes
  /api/events
*/

const { Router } = require("express");
const { check } = require("express-validator");
const { fieldsValidator } = require("../middlewares/fields-validator");
const { jwtValidator } = require("../middlewares/jwt-validator");

const {
  getEvent,
  createEvent,
  updateEvent,
  deleteEvent,
} = require("../controllers/events");
const { isDate } = require("../helpers/isDate");

const router = Router();

// Todas tienen que pasar la validacion de jwt
router.use(jwtValidator);

// Obtener evento
router.get("/", getEvent);

// Crear un nuevo evento
router.post(
  "/",
  [
    check("title", "El titulo es obligatorio").not().isEmpty(),
    check("start", "La fecha de inicio es obligatoria").custom(isDate),
    check("end", "La fecha de fin es obligatoria").custom(isDate),
    fieldsValidator,
  ],
  createEvent
);

// Actualizar evento
router.put("/:id", updateEvent);

// Eliminar evento
router.delete("/:id", deleteEvent);

module.exports = router;
