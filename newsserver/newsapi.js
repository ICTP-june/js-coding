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
    res.render('index', {
        one: "this is one",
        two: "this is two",
        data: data
    });
});
// app.get('/', async (request, response) => {
//     // const data = [
//     //     {
//     //         title: 'title111',
//     //         author: 'author111',
//     //         publishedAt: '2024-07-03 15:56:33',
//     //         url: 'http://www.naver.com'
//     //     },
//     //     {
//     //         title: 'title222',
//     //         author: 'author222',
//     //         publishedAt: '2024-07-03 17:58:33',
//     //         url: 'http://www.daum.com'
//     //     },
//     // ]
//     const data = await getApiData();
//     let html = '';
//     data.forEach((d) => {
//         html += `<p>${d.title}</p>
//                 <p>${d.author}</p>
//                 <p>${d.publishedAt}</p>
//                 <a href=${d.url}>${d.url}</a>
//                 <hr/>`;
//     });
//     response.send(`
//         <html>
//         <body>
//           <div id='wrapper'>
//           ${html}
//           </div>
//         </body>
//         </html>
//     `);
// });

const port = 8000;
app.listen(port, () => {
    console.log(`server listening on port ${port}`);
})