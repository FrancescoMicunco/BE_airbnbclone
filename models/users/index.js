import sequelize from '../../service/connect.js';
import s from 'sequelize';

const { DataTypes } = s


const User = sequelize.define('User', {

    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    isHost: false

}, {
    // Other model options go here
});

export default User