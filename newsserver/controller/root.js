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
    const data = await getApiData('us');
    const result = data.map((object) => {
        if(object.urlToImage !== null && object.urlToImage.endsWith('/')) {
            object.urlToImage = object.urlToImage.slice(0, -1);
            return object;
        } else {
            return object;
        }
    });
    res.render('index', {
        one: "this is one",
        two: "this is two",
        data: result
    });
});

module.exports = router;