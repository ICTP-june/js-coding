const data = [
    {
        url : 'https://blabla.net/img/sdgkuhsdg'
    },
    {
        url: 'https://blabla.net/img/sdgkuhsdg/sdgh/'
    },
    {
        url: 'sdikshndbsb/sdgkjsdiksdb/sdgksudhgkjsdb/'
    },
    {
        url: null
    },
];
// let str = data[0].url; 
// const str = "Hello, World";
// const last = str.charAt(str.length - 1);
// if(str.charAt(str.length - 1) === '/') {
//     str = str.slice(0, -1);
// }
// console.log(str);
const data11 = data.map((v,i) => {
    if(v.url !== null && v.url.charAt(v.url.length - 1) === '/') {
        return {url : v.url.slice(0, -1)};
    } else {
        return {url : v.url};
    }
});
console.log(data11);

