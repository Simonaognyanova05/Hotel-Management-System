const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Admin = require('../../models/Admin');

const dbUrl = 'mongodb://localhost:27017/hotel_db';
const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}

async function addAdmin(req, res){
    await mongoose.connect(dbUrl, connectionParams);

    const {username, password, rePass } = req.body;

    if(password.length <= 6){
        res.send(`
        <script>
            alert('Паролата трябва да е минимум 6 символа!');
            window.location.href = '/admin/register';
        </script>
        `)
    }
    if(password != rePass){
        res.send(`
        <script>
            alert('Паролите не съвпадат!');
            window.location.href = '/admin/register';
        </script>
        `)
    }

    
    try{
        const hashedPassword = await bcrypt.hash(password, 10);

        const admin = new Admin({
            username, hashedPassword
        })

        await admin.save();
        req.session.admin = admin;
        res.redirect('/');
    }catch(e){
        console.log(e);
    }
}

module.exports = { addAdmin }