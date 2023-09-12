import express from "express";
import { CreateNew, GetPerson } from "../controller/controller.js";
import validateStringField from "../validation/validationMiddleware.js";

const Route = express.Router();
Route.post("/",validateStringField, CreateNew);
Route.get("/:id", GetPerson);

export default Route;