const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/product_manager_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

    .then(() => console.log("Right On! We are ready to Rock & Roll!"))
    .catch(err => console.log("Database connection error.", err));