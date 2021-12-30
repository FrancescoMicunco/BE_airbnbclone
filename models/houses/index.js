import sequelize from "../../service/connect.js";
import s, { UUIDV4 } from 'sequelize';

const { DataTypes } = s;

const Houses = sequelize.define('Houses', {
    id: {
        primaryKey: true,
        type: DataTypes.STRING,
        defaultValue: UUIDV4
    },
    rooms: {
        type: DataTypes.STRING,
        allowNull: false
    },
    max_host_num: {
        type: DataTypes.STRING,
        allowNull: false
    },
    isSmoking: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    isCooking: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    isPrivateBath: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    isFree: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    rate: {
        type: DataTypes.STRING,
        allowNull: false
    },
    isWiFi: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    isParking: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    isBreakfast: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    image1url: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true
    },
})

export default Houses