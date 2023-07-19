const express = require('express');
const connection = require('./db/db');
const authRouter = require('./router/authRouter');
const cors = require('cors');
const bmiRouter = require('./router/bmiRouter');

const app = express()
app.use(cors({origin : ["http://localhost:3000"]}))

app.use(express.urlencoded({extended: true}))
app.use(express.json());

app.use('/auth', authRouter);
app.use('/bmi', bmiRouter);
app.get('/', (req,res) => res.send('hello'))

app.listen(8080, () => {console.log('Server started on http://localhost:8080')})