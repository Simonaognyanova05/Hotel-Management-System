const { getDoubleBalconyRoom } = require('../../requests/user/getDoubleRoomBalcony');

module.exports = async (req, res) => {
    const doubleBalconyRoom = await getDoubleBalconyRoom(req, res);
    res.render('user/doubleBalcony', { title: 'Стандартна двойна стая с балкон', doubleBalconyRoom});
}