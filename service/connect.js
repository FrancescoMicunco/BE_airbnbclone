import { Sequelize } from 'sequelize'

const sequelize = new Sequelize(process.env.DB_URL)

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