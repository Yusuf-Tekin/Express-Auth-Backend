const express = require('express');
const app = express();
const dotenv = require('dotenv')
dotenv.config({
    path:'./env/config/config.env'
})

app.use(express.json())

const MainRouter = require('./Routers/index');
const { ConnectDatabase } = require('./Helper/Database/ConnectDatabase');
const { CustomErrorHandler } = require('./Middleware/Error/CustomErrorHandler');

const PORT = process.env.PORT;
const NODE_ENV = process.env.NODE_ENV
app.use('/api/v2',MainRouter)
app.use(CustomErrorHandler)
ConnectDatabase();
app.listen(PORT,() => {
    console.log(`Server started on 5000 PORT : http://localhost:${PORT} : NODE_ENV : ${NODE_ENV}`)
})
