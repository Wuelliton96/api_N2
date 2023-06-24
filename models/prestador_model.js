import {Sequelize} from 'sequelize';
import db from '../config/database.js'

const {DataTypes} = Sequelize

const prestador = db.define('prestador',{
    codigo_prestador: {
        type: DataTypes.INTEGER(11),
        primaryKey: true
    },
    nome_prestador: {
        type:Sequelize.STRING(100)  
    },
    cpf_prestador: {
        type:Sequelize.STRING(11)
    }
},{
    timestamps: false,
    freezeTableName: true
})

export default prestador