import cheerio from 'cheerio' // 1

export default async (req, res) => { // 2
    if (req.method === 'GET') { // 3

        try { // 4
            const response = await fetch(`https://www.alvarum.com/ccot4`)
            const htmlString = await response.text()
            return res.json({
                money: htmlString
            })
            const $ = cheerio.load(htmlString)
            const followerCountString = $('.amount .formattedAmount:first-child').text() + '€'

            res.statusCode = 200
            return res.json({
                money: followerCountString,
            })
        } catch (e) { // 5
            res.statusCode = 404
        }
    }
}
