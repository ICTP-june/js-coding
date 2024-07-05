const express = require('express');
const app = express();

const domesticRoute = require('./controller/domestic');
const rootRoute = require('./controller/root');

app.use('/domestic', domesticRoute);
app.use('/', rootRoute);

app.set('view engine', 'ejs');
app.set('views', './views');

const port = 8000;
app.listen(port, () => {
    console.log(`server listening on port ${port}`);
})