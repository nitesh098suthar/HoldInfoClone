import express from "express"
import cors from "cors"
import erroMiddleware from "./middleware/errorMiddleware.js";
import data from "./routes/data.js"
import dotenv from "dotenv"

dotenv.config({path : "./config/.env"})

export const app = express();

const corsOption = {
    origin : process.env.FRONTEND_URI,
    methods : ["GET"],
    credentials : true
}

app.use(express.json())
app.use(cors(corsOption))
app.use("/api/v1", data)
app.use(erroMiddleware)