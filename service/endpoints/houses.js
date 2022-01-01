import express from 'express';
import { Op } from 'sequelize';
import Houses from '../../models/houses/index.js';

const router = express.Router();

router
    .route('/')
    .get(async(req, res, next) => {
        try {
            const house = await Houses.findAll({
                where: {
                    ...(req.query.seacrh && {
                        [Op.or]: [{
                            rooms: {
                                [Op.iLike]: `%${req.query.search}%`
                            },
                            max_host_num: {
                                [Op.iLike]: `%${req.query.search}%`
                            },
                            isSmoking: {
                                [Op.iLike]: `%${req.query.search}%`
                            },
                            isCooking: {
                                [Op.iLike]: `%${req.query.search}%`
                            },
                            isPrivateBath: {
                                [Op.iLike]: `%${req.query.search}%`
                            },
                            isFree: {
                                [Op.iLike]: `%${req.query.search}%`
                            },
                            title: {
                                [Op.iLike]: `%${req.query.search}%`
                            },
                            description: {
                                [Op.iLike]: `%${req.query.search}%`
                            },
                            rate: {
                                [Op.iLike]: `%${req.query.search}%`
                            },
                            isWiFi: {
                                [Op.iLike]: `%${req.query.search}%`
                            },
                            isParking: {
                                [Op.iLike]: `%${req.query.search}%`
                            },
                            isBreakfast: {
                                [Op.iLike]: `%${req.query.search}%`
                            }
                        }]
                    })
                }
            })
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