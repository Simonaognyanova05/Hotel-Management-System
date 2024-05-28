const { getSpa } = require("../../requests/user/getSpa")

module.exports = async (req, res) => {
    const spa = await getSpa(req, res);
    res.render('user/spa', {title: "Спа център", spa})
}