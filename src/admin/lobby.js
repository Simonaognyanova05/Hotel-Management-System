module.exports = (req, res) => {
    res.render('admin/lobby', {title: "Лоби бар", layout: 'mainAdmin', admin: req.session.admin})
}