import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { config } from 'dotenv';
import router from './router/route.js';


/** import connection file */
import connect from './database/conn.js';

const app = express()

/** app middlewares */
app.use(morgan('tiny'));
app.use(express.json());
config();
app.use(
cors({
    origin: true,
    optionsSuccessStatus: 200,
    credentials: true,
})
);
app.options(
"*",
cors({
    origin: true,
    optionsSuccessStatus: 200,
    credentials: true,
})
);


/** appliation port */
const port = process.env.PORT || 8080;


/** routes */
app.use('/api', router) /** apis */


app.get('/', (req, res) => {
    try {
        res.json("Get Request")
    } catch (error) {
        res.json(error)
    }
})


connect().then(() => {
    try {
        app.listen(port, () => {
            console.log(`Server connected to http://localhost:${port}`)
        })
    } catch (error) {
        console.log("Cannot connect to the server");
    }
}).catch(error => {
    console.log("Invalid Database Connection");
})