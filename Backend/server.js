import express from "express"
import mysql from "mysql"
import cors from "cors"


const server = express()
server.use(cors())
const Port = 5000


const db= mysql.createConnection({
    host: "localhost",
    user:'root',
    password:"",
    database:"myapp"
})

db.connect((err) => {
    if(err) {
        console.log("db connection error:", err)
    }else {
        console.log("db connected");
        
    }
})

server.get("/", (req, res) => {
    return res.json("from the backend")
})

server.get("/user", (req, res) => {
    const sql = "SELECT * FROM user"
    db.query(sql, (err, data) => {
        if(err) return res.json(err);
        return res.json(data)
    })
})

server.listen (Port , () => {
    console.log(`server running port ${Port}`);
    
})

