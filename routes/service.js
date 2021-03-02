import express from "express";
import ServicesController from "../controller/ServicesController.js";

var router = express.Router();

var services = new ServicesController();

router.get("/", services.index);
router.post("/test", services.test);
router.get("/test", services.test);

export default router;
