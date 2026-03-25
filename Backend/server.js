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

server.post("/api/user", async(req, res) => {
    try {
        const { email, password, roleId } = req.body;
        console.log(req.body);
        const sql = "SELECT * FROM user"
       await db.query(sql, async (err, data) => {
            console.log(data);
            
            if (err) return res.status(500).json("error: Internal server error", error)
            if (!data) return res.status(404).json({ message: "data Not Found", })
            const dbData = data.find((item) => item.email === email)
            console.log(dbData, 85);
            
            if (!dbData) return res.status(401).json({ message: "Email Invaild" })
            const currentRole = dbData.roleId
            if (dbData.roleId !== roleId) return res.status(401).json({ message: "check you valid domain", currentRole })


            const hashPassword = await bcrypt.compare(password, dbData.password)
            console.log(hashPassword, "hash pass");


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

server.listen(Port, () => {
    console.log(`server running port ${Port}`);

})

