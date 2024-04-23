module.exports = (req, res) => {
    res.render('admin/events', {title: "Зала за мероприятия", layout: 'mainAdmin', admin: req.session.admin})
}