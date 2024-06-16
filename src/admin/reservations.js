module.exports = (req, res) => {
    res.render('admin/reservations', {title: 'Dream Castle | Администатор', admin: req.session.admin})
}