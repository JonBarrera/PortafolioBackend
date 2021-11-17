if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

//Initialization
const app = express();
require('./src/database');

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Routes
app.use('/api/books', require('./src/routes/books'));

//Start the serve
app.listen(app.get('port'), () => {
    console.log('Serve on port: ', app.get('port'));
})

//Home aplication
app.get('/', (req, res, next) => {

    res.status(200).json({
        status: 'success',
        data: {
            name: 'api portafolio',
            version: '0.1.0'
        }
    });

});