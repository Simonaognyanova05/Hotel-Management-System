module.exports = (req, res) => {
    res.render('admin/register', {title: "Създаване на администратор", layout: 'mainAdmin', admin: req.session.admin})
}