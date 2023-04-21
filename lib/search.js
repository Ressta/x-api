const axios = require('axios')
const cheerio = require('cheerio')

function chord(query) {
	try {
    const glink = await axios.get(`https://www.gitagram.com/?s=${query}`)
    const plink = cheerio.load(glink.data)('#content').find('tbody > tr:nth-child(1) > td:nth-child(1) > a:nth-child(1)').attr('href')
    if (plink == undefined) return ({
        status: false,
        message: 'Chord not found!'
    })
    const { data } = await axios.get(plink)
    const $ = cheerio.load(data)
    const result = {
        status: 200,
        author: author,
        title: $('article > div > header > h1').text(),
        artist: $('article > div > header > div > a:nth-child(2) > span').text(),
        chord: $('article > div > div.content > pre').text().trim()
    }
    return result
} catch (e) {
	return e
}
};

