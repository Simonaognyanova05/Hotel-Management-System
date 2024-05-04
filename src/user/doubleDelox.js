const { getDoubleDeluxRoom } = require('../../requests/user/getDoubleDelux');

module.exports = async (req, res) => {
    const doubleDeluxRoom = await getDoubleDeluxRoom(req, res);
    res.render('user/doubleDelux', { title: 'Двойна стая делукс', doubleDeluxRoom});
} 