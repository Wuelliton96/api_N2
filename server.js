import  express  from "express";
import db from "./config/database.js"
import router from "./routers/prestador_router.js";

const server = express();
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use("/api/prestador",router)

try{
    await db.authenticate()
    console.log("Conexão com o MySQL estabelecida!")
}catch (e){
    console.e("Conexao com o  MySQL não estanelecida")
}

server.use(router)
server.listen(6010, () => console.log("Server executando em http://localhost:6010"))