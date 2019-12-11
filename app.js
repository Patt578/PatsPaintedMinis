let express = require('express');
require('dotenv').config();

let app = express();

let sequelize = require('./db');
let bodyParser = require('body-parser');

sequelize.sync();
app.use(bodyParser.json())

app.get('/',(req,res)=>{
    res.send('online');
})
app.listen(3000);