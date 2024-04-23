module.exports = (req, res) => {
    res.render('admin/children', {title: "Детски кът", layout: 'mainAdmin', admin: req.session.admin})
}