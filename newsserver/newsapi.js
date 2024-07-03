const express = require('express');
const app = express();

app.get('/', (request, response) => {
    response.send(`
        <html>
        <body>
          hihi
        </body>
        </html>
    `);
});

const port = 8000;
app.listen(port, () => {
    console.log(`server listening on port ${port}`);
})