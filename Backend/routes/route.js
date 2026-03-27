const express = require("express") 
const route = express.Router()

const {commonRegister, commonLogin} = require('../controllers/authControler')
const { getUserFunction, userUdateFunction, userSoftDeleteFunction } = require("../controllers/userControler")


route.post('/register', commonRegister)
route.post('/login', commonLogin)

route.get('/user', getUserFunction)
route.put('/user/update', userUdateFunction)
route.patch('/user/softdelete/:id', userSoftDeleteFunction)




module.exports = route;