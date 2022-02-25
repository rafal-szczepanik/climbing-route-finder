import {Router} from 'express'
import {LandRecord} from "../records/land.record";
import {AreaRecord} from "../records/area.record";
import {RockArenaRecord} from "../records/rock_arena_record";
import {ClimbingRouteRecord} from "../records/climbing_record";

export const climbingRouteRouter = Router();

climbingRouteRouter
    .post('/', async (req, res) => {
        const rockName = req.body.rock_area_name
        const climbingRoutes = await ClimbingRouteRecord.getRoutes(rockName)
        console.log(climbingRoutes)
        res.render('climbing_route/list', {
            rockName,
            climbingRoutes,
        })
    })