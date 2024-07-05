const express = require('express');
const router = express.Router();

const domesticService = require('../service/domesticService');

router.get('/', async (req, res, next) => {
    const result = await domesticService.getApiData('kr');
    res.render('domestic', {
        one: "this is one",
        two: "this is two",
        data: result
    });
});

router.get('/sports', async (req, res, next) => {
    const data = await domesticService.getApiData('kr','sports');
    res.render('domestic-sports', {
        one: "this is one",
        two: "this is two",
        data: data
    });
});

module.exports = router;