const axios = require('axios').default;

const API_KEY = '380ce161b7e444158a7e387fec0419d0';
const obj = {
    getLog: (str) => {
        console.log(str);
    },
    getApiData: async (countryCode, category = 'business') => {
        return await axios.get(`https://newsapi.org/v2/top-headlines?country=${countryCode}&category=${category}&apiKey=${API_KEY}`)
                        .then(function(response) {
                            // console.log(response.data.articles);
                            return response.data.articles;
                        });
    }
};

module.exports = obj;