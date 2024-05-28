const { getLobby } = require('../../requests/user/getLobby')

module.exports = async (req, res) => {
    const lobby = await getLobby(req, res);
    res.render('user/lobby', {title: "Лоби бар", lobby})
}