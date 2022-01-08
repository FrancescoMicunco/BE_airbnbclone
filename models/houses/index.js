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
        type: DataTypes.INTEGER,
        allowNull: false
    },
    maxhostnum: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 1,
            notNull: {
                msg: 'Please enter at least 1 room'
            }
        }
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
        type: DataTypes.STRING,
        allowNull: false
    },
    rate: {
        type: DataTypes.INTEGER,
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
        type: DataTypes.STRING,
        allowNull: true
    },
    price: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

export default Houses