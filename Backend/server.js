const express =  require( "express")
const cors =  require( "cors")
const route =  require( "./routes/route")
require("./config/initDB")
const server = express();
server.use(cors());
const Port = 5000;
server.use(express.json())
server.use("/api", route)
server.listen(Port, () => {
    console.log(`server running port ${Port}`);
})

