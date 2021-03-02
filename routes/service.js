import express from "express";
import ServicesController from "../controller/ServicesController.js";

var router = express.Router();

var services = new ServicesController();

router.get("/", services.index);
router.post("/test", services.test);
router.get("/test", services.test);
router.post("/divisa", services.divisa);
router.post("/interes", services.interes);

export default router;
