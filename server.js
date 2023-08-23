// server.js
const express = require('express');
const expressHandlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const db = require('./db');
const path = require('path');

const apiRoutes = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 3000;
// Cấu hình Handlebars làm engine giao diện
app.engine('handlebars', expressHandlebars.engine({
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
    }
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.json());

app.use('/api', apiRoutes);

app.listen(PORT, () => {
    console.log(`Server đang lắng nghe tại cổng ${PORT}`);
});