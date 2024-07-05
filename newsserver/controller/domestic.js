const express = require('express');
const router = express.Router();
const axios = require('axios').default;

const API_KEY = '380ce161b7e444158a7e387fec0419d0';
const getApiData = async (countryCode, category = 'business') => {
    return await axios.get(`https://newsapi.org/v2/top-headlines?country=${countryCode}&category=${category}&apiKey=${API_KEY}`)
                    .then(function(response) {
                        console.log(response.data.articles);
                        return response.data.articles;
                    });
}

router.get('/', async (req, res, next) => {
    const result = await getApiData('kr');
    res.render('domestic', {
        one: "this is one",
        two: "this is two",
        data: result
    });
});

module.exports = router;