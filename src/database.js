import {Sequelize} from 'sequelize';

export const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST, 
        dialect: process.env.DB_DIALECT 
    });

export const conectarDB = async () => {
    try {
        await sequelize.authenticate()
        console.log('Base de dato conectada');
    } catch (error) {
        console.log('No se pudo conectar a la base de datos', error);    
    }
}

