import express from "express";
import { connectMongoose } from "./util/connectMongoose.js";
import bookRouter from "./router/bookRoutes.js";
import cors from "cors";
import "dotenv/config";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());

// Der Server soll mit JSON arbeiten können
app.use(express.json());
app.use(bookRouter)
const mongooseConnected = await connectMongoose()

if (mongooseConnected) {
    app.listen(PORT, () => {
        console.log("listening on port 4000");
    })
} else {
    console.error("Datenbankverbindung hat nicht geklappt.");
}
