const { getTwoRoomsApart } = require('../../requests/user/getTwoRoomsApart');

module.exports = async(req, res) => {
    const twoRoomsApart = await getTwoRoomsApart(req, res);
    res.render('user/twoRoomsApart', { title: 'Двустаен апартамент', twoRoomsApart});
} 