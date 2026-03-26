import express from "express"
import mysql from "mysql"
import cors from "cors"
import bcrypt, { hash } from "bcrypt"


const server = express();
server.use(cors());
const Port = 5000;
server.use(express.json())


const db = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: "",
    database: "myapp"
})

db.connect((err) => {
    if (err) {
        console.log("db connection error:", err)
    } else {
        console.log("db connected");
    }
})

server.post("/api/register", async (req, res) => {

    const { roleId, email, password, name } = req.body;
    try {
        console.log(req.body);
        const hashPassword = await bcrypt.hash(password, 10)

        const sql = "INSERT INTO user (`roleId`, `name`, `email`, `password`) VALUES (?, ?, ?, ?)"
        await db.query(sql, [roleId, name, email, hashPassword], (err) => {
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
        const sql = "SELECT * FROM user"
        await db.query(sql, async (err, data) => {

            if (err) return res.status(500).json("error: Internal server error", err)
            if (!data) return res.status(404).json({ message: "data Not Found", })
            const dbData = data.find((item) => item.email === email)

            if (!dbData) return res.status(401).json({ message: "Email Invaild" })
            const currentRole = dbData.roleId
            if (dbData.roleId !== roleId) return res.status(401).json({ message: "check you valid domain", currentRole })

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
        console.log(data, "alldata");
        console.log(dbData, "filter");

        if (!dbData) return res.status(404).json({ message: "User Not Found" })
        return res.status(200).json({ dbData })
    })
})


server.put('/api/update', (req, res) => {
    const {name, email, id} = req.body
    try {
        const updateSql = "UPDATE user SET name = ?, email = ? WHERE id = ?"
        db.query(updateSql,[name, email, id], (err) => {
            if (err) return res.status(500).json("error: DB Internal server error:", err)
            const newData = req.body;
            return res.status(200).json({ message: "Successfully Update" , newData})
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

