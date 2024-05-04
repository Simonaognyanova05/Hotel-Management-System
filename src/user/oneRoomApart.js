const { getOneRoomApart } = require('../../requests/user/getOneRoomApart');

module.exports = async (req, res) => {
    const oneRoomApart = await getOneRoomApart(req, res);
    res.render('user/oneRoomApart', { title: 'Едностаен апартамент', oneRoomApart});
} 