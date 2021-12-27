import express from "express";
import { Op } from 'sequelize';
import Cities from "../../models/Cities/index.js";


const router = express.Router();

router
    .route('/')
    .get(async(req, res, next) => {
        try {
            const city = await Cities.findAll()
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




export default router