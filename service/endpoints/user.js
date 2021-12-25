import express from 'express';
import { Op, Sequelize } from 'sequelize';
import User from '../../models/users/index.js'

const router = express.Router();

router
    .route('/')
    .get(async(req, res, next) => {
        res.send("this is the users list")
    })

export default router