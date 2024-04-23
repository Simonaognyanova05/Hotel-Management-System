module.exports = (req, res) => {
    res.render('admin/spa', {title: "Спа център", layout: 'mainAdmin', admin: req.session.admin})
}