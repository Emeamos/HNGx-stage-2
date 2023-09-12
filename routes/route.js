import express from "express";
import { CreateNew } from "../controller/controller.js";
import validateStringField from "../validation/validationMiddleware.js";

const Route = express.Router();
Route.post("/",validateStringField, CreateNew)


export default Route;