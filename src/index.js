import dotenv from "dotenv";
import pool from "./db/config.js";
import app from "./app.js"

dotenv.config({
    path: './env'
})

//Testing POSTGRES Connection
app.get("/", async(req, res) =>{
    const result = await pool.query("SELECT current_database()");
    res.send(`The database name is: ${result.rows[0].current_database}`);
});


app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is runnung at PORT: ${process.env.PORT}`);
    })