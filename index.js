const express = require('express');
const app = express();
require('dotenv').config();
app.set('view engine', 'ejs');

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

// routers
app.use('/', require('./routers/index'));

app.listen(process.env.PORT, () => console.log(`App is ready on port ${process.env.PORT}`));