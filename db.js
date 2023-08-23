const mongoose = require('mongoose');
require('dotenv').config(); // Load biến môi trường từ tệp .env

const uri = process.env.MONGODB_URI;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Lỗi kết nối đến MongoDB:'));
db.once('open', () => {
    console.log('Đã kết nối đến MongoDB');
});

module.exports = db;