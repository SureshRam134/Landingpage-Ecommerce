import express from "express"
import mysql, { Connection } from "mysql2"
import cors from "cors"
import bcrypt from "bcrypt"


const server = express();
server.use(cors());
const Port = 5000;
server.use(express.json())

let db;
const connection = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: "",
})


connection.connect((err) => {
    if (err) {
        console.log("mysql connection error:", err)
    } else {
        console.log("mysql connected");

        const createDB = "CREATE DATABASE IF NOT EXISTS ecommerces"
        connection.query(createDB, (err) => {
            if (err) return console.error("First DB Not Create", err)
             db = mysql.createConnection({
                host: "localhost",
                user: "root",
                password: "",
                database: "ecommerces"
            });

            db.connect((err) => {
                if (err) return console.log("ecommerces db not connected", err);
                 console.log("ecommerces db connected");

                const table = "CREATE TABLE IF NOT EXISTS user (id INT AUTO_INCREMENT PRIMARY KEY, roleId INT NOT NULL, name VARCHAR(150) NOT NULL, email VARCHAR(150) NOT NULL UNIQUE, password VARCHAR(255) NOT NULL, active BOOLEAN NOT NULL DEFAULT TRUE, INDEX(roleId) )"
                db.query(table, (err) => {
                    if (err) return console.log("User table not create", err);
                    return console.log("User table create")
                })
            })
        })
    }
})







// table

server.post("/api/register", async (req, res) => {

    const { roleId, email, password, name } = req.body;
    try {
        console.log(req.body);
        const hashPassword = await bcrypt.hash(password, 10)

        const sql = "INSERT INTO user (`roleId`, `name`, `email`, `password`) VALUES (?, ?, ?, ?)"
        db.query(sql, [roleId, name, email, hashPassword], (err) => {
            if (err) return res.status(500).json("error: Internal server error", err)
            return res.status(200).json({ message: "SuccessFully Registered" })
        })

    } catch (error) {
        return res.status(500).json("error: Internal server error", error)

    }



})

server.post("/api/user", async (req, res) => {
    try {
        const { email, password, roleId } = req.body;
        console.log(req.body);
        const sql = "SELECT * FROM user WHERE email = ?"
         db.query(sql, [email], async (err, data) => {

            if (err) return res.status(500).json("error: Internal server error", err)
            
            if (data.length === 0) return res.status(404).json({ message: "data Not Found", })
            const dbData = data[0]
            if (!dbData) return res.status(401).json({ message: "Email Invaild" })
            const currentRole = dbData.roleId
            if (dbData.roleId !== Number(roleId)) return res.status(401).json({ message: "check you valid domain", currentRole })

            const hashPassword = await bcrypt.compare(password, dbData.password)
            if (!hashPassword) return res.status(401).json({ message: "Password Invaild" })
            const userDetails = {
                name: dbData.name,
                role: dbData.roleId,
                email: dbData.email,
            }
            return res.status(200).json({ message: "Successfully login", userDetails })
        })
    } catch (error) {
        return res.status(500).json("error: Internal server error", error)
    }
})

server.get('/api/getuser', (req, res) => {
    const getSql = "SELECT * FROM user";
    db.query(getSql, (err, data) => {
        if (err) return res.status(500).json("error: Internal server error:", err);
        // if(!data) return res.status(404).json({message: "OverAll User Not Found"})
        const dbData = data.filter((item) => item.roleId === 1)
        if (!dbData) return res.status(404).json({ message: "User Not Found" })
        return res.status(200).json({ dbData })
    })
})


server.put('/api/update', (req, res) => {
    const { name, email, id } = req.body
    try {
        const updateSql = "UPDATE user SET name = ?, email = ? WHERE id = ?"
        db.query(updateSql, [name, email, id], (err) => {
            if (err) return res.status(500).json("error: DB Internal server error:", err)
            const newData = req.body;
            return res.status(200).json({ message: "Successfully Update", newData })
        })
    } catch (error) {
        return res.status(500).json("error:Internal server error:", error)
    }


})

// server.post('/api/deactivate', (req, rres)=> {
//     const {id} = req.body
//     const deactivate = ''
//     db.query(deactivate, [inActive], (err)=> {

//     })


// })

server.listen(Port, () => {
    console.log(`server running port ${Port}`);

})

