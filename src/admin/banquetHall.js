module.exports = (req, res) => {
    res.render('admin/banquetHall', {title: "Банкетна зала", layout: 'mainAdmin', admin: req.session.admin})
}