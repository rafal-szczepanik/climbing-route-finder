import {Router} from 'express'
import {RockRecord} from "../records/rock.record";

export const rockRouter = Router();

rockRouter
    .post('/', async (req, res) => {
        const rockArea = await RockRecord.getRocks(req.body.rock_area_name)
        res.status(200).render('rock/list', {
            rockArea,
        })
    })