module.exports = (req, res) => {
    res.render('admin/doubleBalcony', { title: 'Стандартна двойна стая с балкон', layout: 'mainAdmin', admin: req.session.admin});
}