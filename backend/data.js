const express = require("express");
const app = express();
const { Pool } = require("pg");
const cors = require("cors");
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(
    cors({
        origin: "*",
    }),
);
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    password: "",
    port: "5432",
    database: "crypto1",
});
app.post("/load", (req, res) => {
    const { first, second, password } = req.body;
    console.log(first);
    pool.query(
        "INSERT INTO data (firstname,secondname,password) VALUES ($1,$2,$3)",
        [first, second, password],
        (error, result) => {
            if (error) {
                throw error;
            }
            res.status(200).json({ msg: "data loaded successfully" });
        },
    );
});
app.post("/sign", (req, res) => {
    const { second, password } = req.body;
    pool.query(
        "SELECT * FROM data WHERE secondname = $1 AND password = $2",
        [second, password],
        (error, result) => {
            if (error) {
                throw error;
            }
            if (result.rows.length === 0) {
                res.status(401).json({ error: "not valid" });
            } else {
                res.status(201).json({ msg: "valid" });
            }
        },
    );
});
app.get("/get",(req,res)=>{
    pool.query("SELECT * FROM data",(error,result)=>{
        if(error){
            throw error
        }
        res.status(201).json(result.rows)
    })
})
app.listen(port, () => {
    console.log("runnig at " + port);
});

app.get("/", (req, res) => {
    console.log("wl");
    res.send("wel");
});
