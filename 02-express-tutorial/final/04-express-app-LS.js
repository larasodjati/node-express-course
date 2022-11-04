const express = require('express');
//provide absolute path to send file
const path = require('path');

const app = express();

//setup static and middleware
//create public folder and copy other static files such as logo, image, and js file from navbar app to public folder
app.use(express.static('./public'));

app.get('/', (req, res) => {
    //provide path to directory
    res.sendFile(path.resolve(__dirname, './navbar-app/index.html'));
})

app.all('*', (req, res) => {
    res.status(404).send('resource not found');
})

app.listen(5000, () => {
    console.log('server is listening on port 5000....');
})
