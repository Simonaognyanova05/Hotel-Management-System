const { getBanquet } = require("../../requests/user/getBanquetHall")

module.exports = async(req, res) => {
    const banquetHall = await getBanquet(req, res);
    res.render('user/banquetHall', {title: "Банкетна зала", banquetHall})
}