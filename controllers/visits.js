/**
 * Router definitions
 */

const express = require('express');
const { handleAllVisits } = require('../handlers/visits');
const router = express.Router();

router.get('/', handleAllVisits);

module.exports = router;