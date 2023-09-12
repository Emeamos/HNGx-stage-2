import express from "express";
import { CreateNew, DeletePerson, GetPerson, UpdatePerson } from "../controller/controller.js";
import validateStringField from "../validation/validationMiddleware.js";

const Route = express.Router();
Route.post("/",validateStringField, CreateNew);
Route.get("/:id", GetPerson);
Route.put("/:id",validateStringField, UpdatePerson);
Route.delete("/:id", DeletePerson);

export default Route;