module.exports = (req, res) => {
    res.render('admin/presidentApart', { title: 'Президентски апартамент', layout: 'mainAdmin', admin: req.session.admin});
}