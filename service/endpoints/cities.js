import express from "express";
import { Op } from 'sequelize';
import Cities from "../../models/Cities/index.js";
import Houses from "../../models/houses/index.js";


const router = express.Router();

router
    .route('/')
    .get(async(req, res, next) => {
        try {
            const city = await Cities.findAll({
                include: Houses,
                where: {
                    ...(req.query.search && {
                        [Op.or]: [{
                                country: {
                                    [Op.iLike]: `%${req.query.search}%`
                                }
                            },
                            {
                                name: {
                                    [Op.iLike]: `%${req.query.search}%`
                                }
                            }
                        ]
                    })
                }
            })
            res.send(city)
        } catch (error) {
            next(error)
        }
    })
    .post(async(req, res, next) => {
        try {
            const city = await Cities.create(req.body)
            res.send("201 - new city added")
        } catch (error) {
            next(error)
        }
    })
router
    .route('/:id')
    .get(async(req, res, next) => {
        try {
            const city = await Cities.findAll({
                include: Houses,
                where: {
                    id: req.params.id
                }
            })

            res.send(city)
        } catch (error) {
            next(error)
        }
    })
    .delete(async(req, res, next) => {
        try {
            const city = await Cities.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.send("201 - city has been deleted deleted!")
        } catch (error) {
            next(error)
        }
    })



export default router