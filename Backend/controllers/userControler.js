const { getUser, userUpdate, softDelete} = require("../models/userModel")

const getUserFunction = (req, res) => {
    getUser((err, result) => {
        if (err) return res.status(500).json("error: Internal server error:", err);
        const dbData = result.filter((item) => item.roleId === 1)
        if (!dbData) return res.status(404).json({ message: "User Not Found" })
        return res.status(200).json({ dbData })
    })
}

const userUdateFunction = (req, res) => {
    const { name, email, id } = req.body
    try {
        userUpdate([name, email, id], (err) => {
            if (err) return res.status(500).json("error: DB Internal server error:", err)
            const newData = req.body
            return res.status(200).json({ message: "Successfully Update", newData })
        })
    } catch (error) {
        return res.status(500).json("error:Internal server error:", error)
    }
}

const userSoftDeleteFunction = (req, res) => {
    const {id} = req.params;
    const {active} = req.body
    const status = active === false ? 0 : 1
    console.log( status, "status");
    softDelete([status, id], (err) => {
        if(err) return res.status(500).json("error:Internal server error:", err)
        return res.status(200).json({message:"Successfully deactivate", active})
    })
}

module.exports = {getUserFunction, userUdateFunction, userSoftDeleteFunction}