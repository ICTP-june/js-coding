const data3 = [
    {
        source: { id: 'bloomberg', name: 'Bloomberg' },
        author: null,
        title: 'Traders Flock to a Trump-Fueled Bet on Higher US Treasury Yields - Bloomberg',
        description: null,
        url: 'https://www.bloomberg.com/news/articles/2024-07-02/traders-flock-to-a-trump-fueled-bet-on-higher-us-treasury-yields',
        urlToImage: null,
        publishedAt: '2024-07-02T20:30:00Z',
        content: "To continue, please click the box below to let us know you're not a robot."
      },
      {
        source: { id: null, name: 'Yahoo Entertainment' },
        author: 'Josh Lipton',
        title: 'Nikola stock pops after topping Q2 sales guidance - Yahoo Finance',
        description: 'Shares of Nikola (NKLA) are trading higher after the company announced it wholesaled 72 Class 8 Nikola hydrogen cell fuel trucks in the second quarter...',
        url: 'https://finance.yahoo.com/video/nikola-stock-pops-topping-q2-201925706.html',
        urlToImage: 'https://s.yimg.com/ny/api/res/1.2/GxsrPVXrRhg0C74Sq3055w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://s.yimg.com/os/creatr-uploaded-images/2024-07/80a5da80-38af-11ef-8fbf-f0a732718700/',
        publishedAt: '2024-07-02T20:19:25Z',
        content: 'Shares of Nikola (NKLA) are trading higher after the company announced it wholesaled 72 Class 8 Nikola hydrogen cell fuel trucks in the second quarter, topping the expected 60 units.\r\n' +
          'Josh Lipton and… [+1234 chars]'
      }
];

console.log(data3);
const data4 = data3.map((object) => {
    if(object.urlToImage !== null && object.urlToImage.endsWith('/')) { 
        object.urlToImage = object.urlToImage.slice(0, -1);
        return object;
    } else {
        return object;
    }
});
console.log(data4);