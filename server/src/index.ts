import express, { Express, Request, Response} from "express";
import cors from "cors";

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("hello world")
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});