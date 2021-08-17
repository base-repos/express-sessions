/**
 * Handler functions for each route
 */

const util = require('../utils/util');

const handleAllVisits = (req, res) => {
    try {
        util.addToSession(req.session);
    } catch {
        return res.status(500).send({ success: false, message: 'Unexpected Error' })
    }
    const { visits } = req.session;
    res.status(200).send({ success: true, visits });
}

module.exports = {
    handleAllVisits
}