import {DataType} from 'sequelize';
import {sequelize} from '../database.js';


export const usuario = sequelize.define ('User', {
    id : {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombreUsuario: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{

    createdAt: true,
    updatedAt: true,
    deletedAt: true,
    tableName: 'User'
})

usuario.sync({force: false}).then(() => {
    console.log('table creada');
});
