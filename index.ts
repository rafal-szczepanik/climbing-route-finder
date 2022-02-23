import * as express from 'express';
import {json, static as eStatic} from 'express'
import 'express-async-errors';
import './utils/db'
import {join} from 'path';
import {engine} from 'express-handlebars'
import {notFound} from "./middlewares/notFound";

const app = express();

//Express middlewares
app.use(eStatic(join(__dirname, 'public')))
app.use(json())

//View engine
app.engine('.hbs', engine({
    extname: '.hbs',
    // helpers: handlebarsHelpers
}))
app.set('view engine', '.hbs')

//Error middlewares
app.use(notFound)

app.listen(3000, '0.0.0.0', () => {
    console.log('Listening on http://localhost:3000')
})
