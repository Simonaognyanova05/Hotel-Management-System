module.exports = (req, res) => {
    res.render('admin/login', {title: "Влизане", layout: 'mainAdmin', admin: req.session.admin})
}