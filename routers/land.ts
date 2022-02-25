import {Router} from 'express'
import {LandRecord} from "../records/land.record";

export const landRouter = Router();

landRouter
    .get('/', async (req, res) => {
        const lands = await LandRecord.listAll()
        res
            .status(200)
            .render('land/list', {
                lands
            })
    })
