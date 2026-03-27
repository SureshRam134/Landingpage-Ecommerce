const bcrypt =  require( "bcrypt")
const {dbRegister, dbLogin} = require('../models/authCommonMudel')

const commonRegister =async (req, res) => {
    const { roleId, email, password, name } = req.body;
    try {
        console.log(req.body);
        const hashPassword = await bcrypt.hash(password, 10)
        dbRegister([roleId, name, email, hashPassword], (err) => {
      
            if (err) return res.status(500).json("error:db Internal server error", err)
            return res.status(200).json({ message: "SuccessFully Registered" })
        })
    } catch (error) {
        return res.status(500).json("error: Internal server error", error)
    }
}

const commonLogin = async(req, res) => {
     try {
            const { email, password, roleId } = req.body;
            dbLogin ([email], async (err, result) => {
                if (err) return res.status(500).json("error: Internal server error", err)
                if (result.length === 0) return res.status(404).json({ message: "data Not Found", })
                const dbData = result[0]
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
}

module.exports = {commonRegister, commonLogin}