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

router
    .route('/:id')
    .get(async(req, res, next) => {
        try {
            const user = await User.findOne({
                where: {
                    id: req.params.id
                }
            })
            if (user === null) { "this user doesn't exist" } else {
                res.send(user)
            }

        } catch (error) {
            next(error)
        }
    })

.put(async(req, res, next) => {
    try {
        const user = await User.update(req.body, {
            where: {
                id: req.params.id
            },
            returning: true
        })
        res.send(user)
    } catch (error) {
        next(error)
    }
})

.delete(async(req, res, next) => {
    try {
        const user = await User.destroy({
            where: {
                id: req.params.id
            }
        })
        if (user > 0) {
            res.send("201 - user deleted!")
        } else { res.send("User not found!") }
    } catch (error) {
        next(error)
    }
})






export default router