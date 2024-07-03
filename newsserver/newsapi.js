const express = require('express');
const app = express();

app.get('/', (request, response) => {
    const data = [
        {
            title: 'title111',
            author: 'author111',
            publishedAt: '2024-07-03 15:56:33',
            url: 'http://www.naver.com'
        },
        {
            title: 'title222',
            author: 'author222',
            publishedAt: '2024-07-03 17:58:33',
            url: 'http://www.daum.com'
        },
        {
            title: 'title333',
            author: 'author3333',
            publishedAt: '2024-07-01 11:56:33',
            url: 'http://www.kakao.com'
        },
    ]
    response.send(`
        <html>
        <body>
          <div id='wrapper'>
          <p>뉴스데이터 제목(title)</p>
          <p>뉴스데이터 작성자(author)</p>
          <p>뉴스데이터 작성일(publishedAt)</p>
          <a href='url'>뉴스데이터url(url)</a>
          <hr/>
          </div>
        </body>
        </html>
    `);
});

const port = 8000;
app.listen(port, () => {
    console.log(`server listening on port ${port}`);
})