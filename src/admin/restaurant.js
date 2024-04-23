module.exports = (req, res) => {
    res.render('admin/restaurant', {title: "Ресторант", layout: 'mainAdmin', admin: req.session.admin})
}