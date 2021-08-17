const express = require('express');
const session = require('express-session');
const port = process.env.PORT || 3000;

const visitsController = require('./controllers/visits');

const app = express();
app.use(express.json());
app.use(session({
    secret: '<INSERT-YOUR-SECRET-HERE>',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false // change to true for production environments
    }
}));

app.use('/visits', visitsController)
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

