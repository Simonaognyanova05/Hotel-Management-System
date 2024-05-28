const { getEvents } = require("../../requests/user/getEvents")

module.exports = async(req, res) => {
    const events = await getEvents(req, res);
    res.render('user/events', {title: "Зала за мероприятия", events})
}