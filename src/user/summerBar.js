const { getSummerBar } = require("../../requests/user/getSummerBar")

module.exports = async (req, res) => {
    const summerBar = await getSummerBar(req, res);
    res.render('user/summerBar', {title: "Летен бар", summerBar})
};
