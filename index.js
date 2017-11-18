import express from "express";
import consign from "consign";

const PORT = 3000;
const app = express();

app.set("json spaces", 4);

consign()
    .include('models')
    .then('routes')
    .into(app);

// app.get("/", (req, res) => res.json({status: "NTask API"}));
// app.get("/", (req, res) => res.send({status: "NTask API"}));

// app.get("/tasks", (req, res) => {
//      res.json({
//        tasks: [
//          {title: "Buy some shoes"},
//          {title: "Fix notebook"}
//        ]
//      });
//    });

app.listen(PORT, () => console.log(`NTask API - Port ${PORT}`));