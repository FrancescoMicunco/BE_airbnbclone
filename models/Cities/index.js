import sequelize from "../../service/connect.js";
import s, { UUIDV4 } from 'sequelize';

const { DataTypes } = s;

const Cities = sequelize.define('Cities', {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: UUIDV4
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

export default Cities