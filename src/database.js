const mongoose = require('mongoose');

mongoose.connect(`${process.env.MONGO_URL}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useMongoClient:true
})
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));



















































