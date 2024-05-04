const { getDoubleRoom } = require('../../requests/user/getDoubleRoom')

module.exports = async (req, res) => {
    const doubleRoom = await getDoubleRoom(req, res);
    res.render('user/doubleRoom', { title: 'Стандартна двойна стая', doubleRoom });
}