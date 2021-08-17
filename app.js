const express = require('express');
const session = require('express-session');
const port = process.env.PORT || 3000;

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

app.get('/get-visits', (req, res) => {
    addToSession(req.session);
    const { visits } = req.session;
    res.status(200).send({ success: true, visits });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

// increment the visits on session if present and sets it to 1 if not present
function addToSession(session) {
    session.visits = session.visits ? session.visits + 1 : 1;
}