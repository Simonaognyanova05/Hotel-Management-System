const { getReservations } = require("../../requests/admin/getReservations")

module.exports = async (req, res) => {
    const reservations = await getReservations(req, res);
    res.render('admin/reservations', {title: 'Dream Castle | Администатор', admin: req.session.admin, layout: 'mainAdmin', reservations})
}