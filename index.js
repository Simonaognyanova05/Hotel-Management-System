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




app.listen(3000);