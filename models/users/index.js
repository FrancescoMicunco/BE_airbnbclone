import sequelize from '../../service/connect.js';
import s from 'sequelize';

const { DataTypes } = s


const User = sequelize.define('User', {
        id: {
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4
        },

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
            allowNull: false,
            unique: true,
            //validate: { isEmail: true }
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,

        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        isHost: {
            type: DataTypes.STRING,
            allowNull: true
        }

    }, //{
    // Other model options go here
    //}
);

export default User