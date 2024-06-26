const Handlebars = require('handlebars');
const express = require('express');
const expressSession = require('express-session');
const exphbs = require('express-handlebars');
const path = require('path');

const homeConstroller = require('./src/user/home');
const aboutController = require('./src/user/about');
const doubleRoom = require('./src/user/doubleRoom');
const doubleBalcony = require('./src/user/doubleBalcony');
const doubleDelox = require('./src/user/doubleDelox');
const oneRoomApart = require('./src/user/oneRoomApart');
const twoRoomsApart = require('./src/user/twoRoomsApart');
const vipApart = require('./src/user/vipApart');
const presidentApart = require('./src/user/presidentApart');
const summerBar = require('./src/user/summerBar');
const lobby = require('./src/user/lobby');
const restaurant = require('./src/user/restaurant');
const spa = require('./src/user/spa');
const children = require('./src/user/children');
const events = require('./src/user/events');
const banquetHall = require('./src/user/banquetHall');

const homeAdmin = require('./src/admin/home');
const doubleRoomAdmin = require('./src/admin/doubleRoom');
const doubleBalconyAdmin = require('./src/admin/doubleBalcony');
const doubleDeloxAdmin = require('./src/admin/doubleDelox');
const oneRoomApartAdmin = require('./src/admin/oneRoomApart');
const twoRoomsApartAdmin = require('./src/admin/twoRoomsApart');
const vipApartAdmin = require('./src/admin/vipApart');
const presidentApartAdmin = require('./src/admin/presidentApart');
const summerBarAdmin = require('./src/admin/summerBar');
const lobbyAdmin = require('./src/admin/lobby');
const restaurantAdmin = require('./src/admin/restaurant');
const spaAdmin = require('./src/admin/spa');
const childrenAdmin = require('./src/admin/children');
const eventsAdmin = require('./src/admin/events');
const banquetHallAdmin = require('./src/admin/banquetHall');
const login = require('./src/admin/login');
const register = require('./src/admin/register');
const { addAdmin } = require('./requests/admin/register');
const { loginAdmin } = require('./requests/admin/login');
const { doubleRoomReq } = require('./requests/admin/doubleRoomReq');
const { doubleBalconyRoomReq } = require('./requests/admin/doubleBalconyRoomReq');
const { doubleDeluxRoomReq } = require('./requests/admin/doubleDeluxReq');
const { oneRoomApartReq } = require('./requests/admin/oneRoomApartReq');
const { twoRoomApartReq } = require('./requests/admin/twoRoomApartReq');
const { vipApartReq } = require('./requests/admin/vipApartReq');
const { presidentApartReq } = require('./requests/admin/presidentApartReq');
const { restaurantReq } = require('./requests/admin/restaurantReq');
const { lobbyReq } = require('./requests/admin/lobbyReq');
const { summerbarReq } = require('./requests/admin/summerBarReq');
const { spaReq } = require('./requests/admin/spaReq');
const { childrenReq } = require('./requests/admin/childrenReq');
const { eventsReq } = require('./requests/admin/eventsReq');
const { banquetReq } = require('./requests/admin/banquetReq');
const reservation = require('./src/user/reservation');
const { makeReservation } = require('./requests/user/makeReservation');
const tenks = require('./src/user/tenks');
const logout = require('./requests/admin/logout');
const reservations = require('./src/admin/reservations');
const { checkReservation } = require('./src/admin/checkReservation');
const { checkReservationReq } = require('./requests/admin/checkReservation');

const app = express();

const hbs = exphbs.create({ extname: 'hbs', defaultLayout: 'main', layoutsDir: path.join(__dirname, 'views/layouts/') });
app.use(express.urlencoded({ extended: true }));
app.use(expressSession({    
    secret: 'secret cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: 'auto' }
}));
Handlebars.registerHelper('eq', (a, b) => a == b);


app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.use('/content', express.static('static'));

app.get('/', homeConstroller);
app.get('/about', aboutController);
app.get('/double', doubleRoom);
app.get('/doubleBalcony', doubleBalcony);
app.get('/doubleLux', doubleDelox);
app.get('/oneRoomApart', oneRoomApart);
app.get('/twoRoomApart', twoRoomsApart);
app.get('/vipApart', vipApart);
app.get('/presidentApart', presidentApart);
app.get('/summerBar', summerBar);
app.get('/lobby', lobby);
app.get('/restaurant', restaurant);
app.get('/spa', spa);
app.get('/children', children);
app.get('/events', events);
app.get('/banquetHall', banquetHall);
app.get('/reservation', reservation);
app.post('/makeReservation', async(req, res) => {
    await makeReservation(req, res);
});
app.get('/tenks', tenks);

app.get('/admin', homeAdmin);
app.get('/admin/double', doubleRoomAdmin);
app.post('/doubleRoomChange', async(req, res) => {
    await doubleRoomReq(req, res);
})
app.get('/admin/doubleBalcony', doubleBalconyAdmin);
app.post('/doubleBalconyChange', async(req, res) => {
    await doubleBalconyRoomReq(req, res);
})
app.get('/admin/doubleLux', doubleDeloxAdmin);
app.post('/doubleDelux', async(req, res) => {
    await doubleDeluxRoomReq(req, res);
})
app.get('/admin/oneRoomApart', oneRoomApartAdmin);
app.post('/oneRoomApart', async(req, res) => {
    await oneRoomApartReq(req, res);
})
app.get('/admin/twoRoomApart', twoRoomsApartAdmin);
app.post('/twoRoomApart', async(req, res) => {
    await twoRoomApartReq(req, res);
})
app.get('/admin/vipApart', vipApartAdmin);
app.post('/vipApart', async(req, res) => {
    await vipApartReq(req, res);
})
app.get('/admin/presidentApart', presidentApartAdmin);
app.post('/presidentApart', async(req, res) => {
    await presidentApartReq(req, res);
})
app.get('/admin/summerBar', summerBarAdmin);
app.post('/summerBar', async(req, res) => {
    await summerbarReq(req, res);
});
app.get('/admin/lobby', lobbyAdmin);
app.post('/lobby', async(req, res) => {
    await lobbyReq(req, res);
})
app.get('/admin/restaurant', restaurantAdmin);
app.post('/restaurant', async(req, res) => {
    await restaurantReq(req, res);
});
app.get('/admin/spa', spaAdmin);
app.post('/spa', async(req, res) => {
    await spaReq(req, res);
});
app.get('/admin/children', childrenAdmin);
app.post('/children', async(req, res) => {
    await childrenReq(req, res);
});
app.get('/admin/events', eventsAdmin);
app.post('/events', async(req, res) => {
    await eventsReq(req, res);
});
app.get('/admin/banquetHall', banquetHallAdmin);
app.post('/banquet', async(req, res) => {
    await banquetReq(req, res);
});
app.get('/admin/login', login);
app.post('/admin/login', async(req, res) => {
    await loginAdmin(req, res);
})
app.get('/admin/logout', logout)
app.get('/admin/register', register);
app.post('/admin/register', async (req, res) => {
    await addAdmin(req, res);
})
app.get('/admin/reservations', reservations);
app.get('/check/reservation/:_id',  (req, res) =>  checkReservation(req, res));
app.delete('/check/reservation/:_id',  async (req, res) => await checkReservationReq(req, res));
app.listen(3000);