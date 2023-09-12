import express from "express";
import { CreateNew, GetPerson, UpdatePerson } from "../controller/controller.js";
import validateStringField from "../validation/validationMiddleware.js";

const Route = express.Router();
Route.post("/",validateStringField, CreateNew);
Route.get("/:id", GetPerson);
Route.post("/:id",validateStringField, UpdatePerson);

export default Route;