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

app.get('/admin', homeAdmin);
app.get('/admin/double', doubleRoomAdmin);
app.post('/doubleRoomChange', async(req, res) => {
    await doubleRoomReq(req, res);
})
app.get('/admin/doubleBalcony', doubleBalconyAdmin);
app.get('/admin/doubleLux', doubleDeloxAdmin);
app.get('/admin/oneRoomApart', oneRoomApartAdmin);
app.get('/admin/twoRoomApart', twoRoomsApartAdmin);
app.get('/admin/vipApart', vipApartAdmin);
app.get('/admin/presidentApart', presidentApartAdmin);
app.get('/admin/summerBar', summerBarAdmin);
app.get('/admin/lobby', lobbyAdmin);
app.get('/admin/restaurant', restaurantAdmin);
app.get('/admin/spa', spaAdmin);
app.get('/admin/children', childrenAdmin);
app.get('/admin/events', eventsAdmin);
app.get('/admin/banquetHall', banquetHallAdmin);
app.get('/admin/login', login);
app.post('/admin/login', async(req, res) => {
    await loginAdmin(req, res);
})
app.get('/admin/register', register);
app.post('/admin/login', async (req, res) => {
    await addAdmin(req, res);
})
app.listen(3000);