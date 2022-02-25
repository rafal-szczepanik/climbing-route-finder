import {Router} from 'express'
// import {home} from '../controllers/home'

export const homeRouter = Router();

homeRouter
    .get('/', (req, res) => {
        res
            .status(301)
            .redirect('/land')
    })