module.exports = (req, res) => {
    const admin = req.session.admin;
    if (admin) {
        res.render('admin/home', { title: "Начало", layout: 'mainAdmin', admin });
    } else {
        res.render('admin/login', { title: "Влизане", layout: 'mainAdmin', admin });
    }
}