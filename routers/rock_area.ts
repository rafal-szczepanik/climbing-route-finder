import {Router} from 'express'
import {RockArenaRecord} from "../records/rock_arena_record";

export const rockArenaRouter = Router();

rockArenaRouter
    .post('/', async (req, res) => {
        const rockArea = await RockArenaRecord.getArea(req.body.area_name)
        res.status(200).render('rock_area/list', {
            rockArea,
        })
    })