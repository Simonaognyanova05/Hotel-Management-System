module.exports = (req, res) => {
    res.render('admin/oneRoomApart', { title: 'Едностаен апартамент', layout: 'mainAdmin', admin: req.session.admin});
}