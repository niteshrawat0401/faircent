const express = require('express');
const connection = require('./db/db');
const authRouter = require('./router/authRouter');


const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json());

app.use('/auth', authRouter);
app.get('/', (req,res) => res.send('hello'))

app.listen(8080, () => {console.log('Server started on http://localhost:8080')})