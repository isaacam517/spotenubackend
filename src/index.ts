import express from "express";
import dotenv from "dotenv";
import { connection } from "./data/baseDataBase";

dotenv.config();

//console.log(process.env.password);

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
    try {
        const result = await connection.raw("SHOW TABLES")
        res.send(result)
    }catch(error){
        res.send(error.sqlMessage)
    }
});

app.listen(3000, () => {console.log("Servidor rodando na porta 3000")});