import express from "express";
import cors from 'cors';
import listEndpoints from "express-list-endpoints";
import { testDB } from '../service/connect.js'
import {
    badRequest,
    unauthorized,
    notFound,
    genericError

} from '../middlewares/herrorhandler.js';
import sequelize from "../service/connect.js";
import userRouter from '../service/endpoints/user.js';
import cityRouter from '../service/endpoints/cities.js'


//====== end import area ========
// ==============================

const server = express();
//============= middlewers =============
//======================================


const whiteList = [process.env.FE_LOCAL_URL]
const corsOption = {
    origin: function(origin, next) {
        if (!origin || whiteList.indexOf(origin) !== -1) {
            next(null, true)
        } else {
            next(new Error("Cors error occurred!"))
        }
    },
};
server.use(cors(corsOption))
server.use(express.json())
    // =========== end points ==============
    //=====================================
server.use('/user', userRouter)
server.use('/city', cityRouter)



//=========== errors handlers =============
//=========================================
server.use(badRequest);
server.use(unauthorized);
server.use(notFound);
server.use(genericError)

// ========== connection ==================
//=========================================

console.table(listEndpoints(server))
server.listen(process.env.port || 3001, async() => {
    console.log("server is running");
    await testDB()
    await sequelize.sync({ logging: false, force: true })
})

server.on("error", (error) => console.log("Server is not running", error))