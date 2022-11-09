const express = require('express');
const path = require('path');
const app = express();
const consoleLog = require('./practice-middleware');

app.use(consoleLog);

// for '/get request, it should return the index.html from the new-public folder
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './new-public/index.html'));
})

// for ‘/sample’ get request, it should just return the line “This is working"
app.get('/sample', (req,res) => {
    res.send('This is working');
})

//Configure using port 3000
app.listen(3000, () => {
    console.log('server is listening on port 3000...');
})