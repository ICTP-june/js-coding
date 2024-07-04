const express = require('express');
const app = express();
const axios = require('axios').default;

const API_KEY = '380ce161b7e444158a7e387fec0419d0';
const getApiData = async () => {
    return await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${API_KEY}`)
                    .then(function(response) {
                        console.log(response.data.articles);
                        return response.data.articles;
                    });
}

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', async (req, res) => {
    const data = await getApiData();
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

const port = 8000;
app.listen(port, () => {
    console.log(`server listening on port ${port}`);
})