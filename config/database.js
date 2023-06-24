import { Sequelize } from "sequelize";
//acessando o banco de dados dos prestadores
const db = new Sequelize('prestadores', 'root', '',{
    host: 'localhost',
    dialect: 'mysql'
})

export default db