const { getRestaurant } = require('../../requests/user/getRestaurant')

module.exports = async (req, res) => {
    const restaurant = await getRestaurant(req, res);
    res.render('user/restaurant', { title: "Ресторант", restaurant })
}