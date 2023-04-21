const axios = require('axios')
const cheerio = require('cheerio')

//FUNCTION
const author = "Rintis"
const clean = (data) => {
     let regex = /(<([^>]+)>)/gi;
     data = data.replace(/(<br?\s?\/>)/gi, " \n");
     return data.replace(regex, "");
   };
   
   async function shortener(url) {
     return url;
   }


//TIKTOK DOWNLOADER
function tiklydown(url) {
    return new Promise((resolve, reject) => {
         axios.get(`https://developers.tiklydown.me/api/download?url=${url}`)
              .then(({ data }) => {
                   resolve(data)
              })
              .catch(e => {
                   reject(e)
              })
    })
}


module.exports.tiklydown = tiklydown
