module.exports = (req, res) => {
    res.render('admin/summerBar', {title: "Летен бар", layout: 'mainAdmin', admin: req.session.admin})
}