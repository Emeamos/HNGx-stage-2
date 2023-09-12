import express from "express";
import dotenv from "dotenv";
import dbConnect from "./config/DBconnect.js";
import Route from "./routes/route.js";
import bodyParser from "body-parser";

dotenv.config();
dbConnect();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/", Route);

const PORT = process.env.PORT || 5555
app.listen(PORT,console.log(`Server is running at ${PORT}`))
