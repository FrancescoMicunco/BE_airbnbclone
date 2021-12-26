import express from 'express';
import { Op, Sequelize } from 'sequelize';
import User from '../../models/users/index.js'

const router = express.Router();

router
    .route('/')
    .get(async(req, res, next) => {
        try {
            const user = await User.findAll()
            const howMany = user.length - 1
            console.log(howMany)
            res.send(user)
        } catch (error) {
            next(error)
        }
    })
    .post(async(req, res, next) => {
        try {
            const user = await User.create(req.body)
            res.send(user)
        } catch (error) {
            next(error)
        }
    })



export default router