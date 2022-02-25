import {Router} from 'express'
import {AreaRecord} from "../records/area.record";

export const areaRouter = Router();

areaRouter
    .post('/', async (req, res) => {
        const area = await AreaRecord.getArea(req.body.land_name)
        res.render('area/list', {
            area,
        })
    })