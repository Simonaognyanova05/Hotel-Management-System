const { getVipApart } = require('../../requests/user/getVipApart');

module.exports = async (req, res) => {
    const vipApart = await getVipApart(req, res);
    res.render('user/vipApart', { title: 'ВИП апартамент', vipApart});
}