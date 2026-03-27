const db = require("./DataBase")


const createDB = "CREATE DATABASE IF NOT EXISTS ecommerces"
db.query(createDB, (err) => {
    if (err) console.error("DB Not Create", err)

    db.query("USE ecommerces", (err) => {
        if (err) console.error(" Not Use to DB", err)

        const userRegTable = "CREATE TABLE IF NOT EXISTS user (id INT AUTO_INCREMENT PRIMARY KEY, roleId INT NOT NULL, name VARCHAR(150) NOT NULL, email VARCHAR(150) NOT NULL UNIQUE, password VARCHAR(255) NOT NULL, active BOOLEAN DEFAULT FALSE, INDEX(roleId) )"
        db.query(userRegTable, (err) => {
            if (err) return console.log("User table not create", err);
            return console.log("User table create")
        })
    })
})










































