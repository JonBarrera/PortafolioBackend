if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
const express = require('express');
const morgan = require('morgan');
//const multer = require('multer');
//const path = require('path');
const cors = require('cors');

//Initialization
const app = express();
require('./database');

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Routes
app.use('/api/books', require('./routes/books'));

//Start the serve
app.listen(app.get('port'), () => {
    console.log('Serve on port: ', app.get('port'));
})