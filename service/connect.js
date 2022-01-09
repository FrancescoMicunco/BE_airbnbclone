import { Sequelize } from 'sequelize'

const sequelize = new Sequelize(
    // process.env.DB_URL 
    process.env.DATABASE,
    process.env.USER,
    process.env.PASSWORD, {
        port: process.env.DB_PORT,
        host: process.env.HOST,
        dialect: "postgres",
        //or the longer string
        // dialectOptions: { // IMPORTANT
        //     ssl: {
        //         require: false,
        //         rejectUnauthorized: false,
        //     },
        // },
    }


)

export const testDB = async() => {
    try {
        await sequelize.authenticate({
            logging: false
        });
        console.log("Db authenticated")

    } catch (error) {
        console.log("Failed authenticate", error)
    }
}

export default sequelize;