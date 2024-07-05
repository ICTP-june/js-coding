const express = require('express');
const router = express.Router();

router.get('/', async (req, res, next) => {
    res.send('this is test response');
});

module.exports = router;