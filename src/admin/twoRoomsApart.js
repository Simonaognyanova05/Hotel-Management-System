module.exports = (req, res) => {
    res.render('admin/twoRoomsApart', { title: 'Двустаен апартамент', layout: 'mainAdmin', admin: req.session.admin});
}