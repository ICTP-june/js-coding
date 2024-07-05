const express = require('express');
const app = express();
const axios = require('axios').default;

const API_KEY = '380ce161b7e444158a7e387fec0419d0';
const getApiData = async (countryCode) => {
    return await axios.get(`https://newsapi.org/v2/top-headlines?country=${countryCode}&category=business&apiKey=${API_KEY}`)
                    .then(function(response) {
                        console.log(response.data.articles);
                        return response.data.articles;
                    });
}

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/domestic-sports', async (req, res) => {
    const data = [
        {
            source: { id: null, name: 'The Points Guy' },
            author: 'Sean Cudahy',
            title: 'ITA Airways set to join Lufthansa Group, with Star Alliance shift expected - The Points Guy',
            description: "The European Union has approved Lufthansa Group's acquisition of Italian flag carrier ITA Airways. The airline is expected to join the Miles & More loyalty program and Star Alliance.",
            url: 'https://thepointsguy.com/news/lufthansa-group-acquisition-ita-airways/',
            urlToImage: 'https://thepointsguy.global.ssl.fastly.net/us/originals/2024/07/ita-dreamliner.jpeg',
            publishedAt: '2024-07-03T17:46:44Z',
            content: "European regulators have approved Lufthansa Group's bid to acquire a 41% stake in embattled Italian flag carrier ITA Airways, the company said Wednesday. The deal, expected to close later this year, … [+4036 chars]"
          }
    ]
    res.render('domestic-sports', {
        one: "this is one",
        two: "this is two",
        data: data
    });
});

// 국내기사 메뉴 클릭 시
app.get('/domestic', async (req, res) => {
    const result = await getApiData('kr');
    res.render('domestic', {
        one: "this is one",
        two: "this is two",
        data: result
    });
});

app.get('/', async (req, res) => {
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

const port = 8000;
app.listen(port, () => {
    console.log(`server listening on port ${port}`);
})