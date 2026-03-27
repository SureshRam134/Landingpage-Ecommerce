const db = require("../config/DataBase")



const getUser = (callback) => {
    const sql = "SELECT * FROM user"
    db.query(sql, callback)
}

const userUpdate = (data, callback) => {
    const sql = "UPDATE user SET name = ?, email = ? WHERE id = ?"
    db.query(sql, data, callback)
}


const softDelete = (data, callback) => {
    const sql = "UPDATE user SET active = ? WHERE id = ?"
    db.query (sql, data, callback)
}

module.exports = { getUser, userUpdate, softDelete }