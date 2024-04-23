module.exports = (req, res) => {
    res.render('admin/doubleDelux', { title: 'Двойна стая делукс', layout: 'mainAdmin', admin: req.session.admin});
}