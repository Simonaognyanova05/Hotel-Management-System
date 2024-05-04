const { getPresidentApart } = require('../../requests/user/getPresidentApart');

module.exports = async(req, res) => {
    const presidentApart = await getPresidentApart(req, res);
    res.render('user/presidentApart', { title: 'Президентски апартамент', presidentApart});
}