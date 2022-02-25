import * as express from 'express';
import {static as eStatic, urlencoded} from 'express'
import 'express-async-errors';
import './utils/db'
import * as methodOverride from "method-override"
import {join} from 'path';
import {engine} from 'express-handlebars'
import {notFound} from "./middlewares/notFound";
import {homeRouter} from "./routers/home";
import {landRouter} from './routers/land';
import {areaRouter} from "./routers/area";
import {climbingRouteRouter} from "./routers/climbing_route";
import {rockArenaRouter} from "./routers/rock_area";
import {rockRouter} from "./routers/rock";

const app = express();

//Express middlewares
app.use(eStatic(join(__dirname, 'public')))
app.use(urlencoded({
    extended: true
}))
//View engine
app.engine('.hbs', engine({
    extname: '.hbs',
    // helpers: handlebarsHelpers
}))
app.set('view engine', '.hbs')

app.use('/', homeRouter)
app.use('/land', landRouter)
app.use('/land/area', areaRouter)
app.use('/land/area/rock_area', rockArenaRouter)
app.use('/land/area/rock_area/rock', rockRouter)
app.use('/land/area/rock_area/rock/climbing_route', climbingRouteRouter)

//Error middlewares
app.use(notFound)

app.listen(3000, '0.0.0.0', () => {
    console.log('Listening on http://localhost:3000')
})
