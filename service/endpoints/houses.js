import express from 'express';
import { Op } from 'sequelize';
import Houses from '../../models/houses/index.js';

const router = express.Router();

router
    .route('/')
    .get(async(req, res, next) => {
        try {
            const house = await Houses.findAll()
            res.send(house)
        } catch (error) {
            next(error)
        }
    })
    .post(async(req, res, next) => {
        try {
            const house = await Houses.create(req.body);
            res.send("201 - New house added")
        } catch (error) {
            next(error)
        }
    })
router
    .route('/:id')
    .get(async(req, res, next) => {
        try {
            const house = await Houses.findOne({
                where: {
                    id: req.params.id
                }
            })
            if (house === null) { "this house doesn't exist" } else {
                res.send(house)
            }
        } catch (error) {
            next(error)
        }
    })

.put(async(req, res, next) => {
    try {
        const house = await Houses.update(req.body, {
            where: {
                id: req.params.id
            },
            returning: true
        })
        res.send("201 - house updated!")
    } catch (error) {
        next(error)
    }
})

.delete(async(req, res, next) => {
    try {
        const house = await Houses.destroy({
            where: {
                id: req.params.id
            }
        })
        if (house > 0) { res.send("201 - house deleted") } else {
            res.send("404 - House not found!")
        }
    } catch (error) {
        next(error)
    }
})

export default router