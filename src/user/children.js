const { getChildren } = require("../../requests/user/getChildren")

module.exports = async (req, res) => {
    const children = await getChildren(req, res);
    res.render('user/children', {title: "Детски кът", children})
}