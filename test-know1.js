const fs = require('fs');
const path = require ('path');
const express = require('express');

const app = express();

app.use(express.json);
app.use(express.urlencoded({extended: true}));

const jsonPath = path.join(__dirname, 'data', 'photos.json');

const jsonData = fs.readFileSync(jsonPath, 'utf8');

const photos = JSON.parse(jsonData);


app.use('/static', express.static(path.join(__dirname, 'public')));

app.get('/',(req,resp)=>{
    console.log('hello');
    resp.json(photos) 
} );

app.get('/:id', (req,resp)=>{
    const idToFind = req.params.id;
    const matches = photos.filter(obj => idToFind == obj.id);
    resp.json(matches);

});

app.get('/iso/:substring',(req,resp)=>{
    const isoToFind = req.params.substring.toUpperCase();
    const matches = photos.filter(obj => isoToFind == obj.iso);
    resolve.json(matches);

});

let port = 8080;
app.listen(port, () => {
    console.log('I am listening on port ' + port);
});
