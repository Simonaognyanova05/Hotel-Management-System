module.exports = (req, res) => {
    res.render('admin/vipApart', { title: 'ВИП апартамент', layout: 'mainAdmin', admin: req.session.admin});
}