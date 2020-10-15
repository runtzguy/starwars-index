const express = require('express');
const path = require('path');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
const env = process.env.NODE_ENV || 'development';
const config = require('../config.js')[env];

const url = 'https://swapi.dev';
const successsMsg = 'Successful data retrieval';
const failMsg = 'Unsuccessful data retrieval';


app.use(bodyParser.json()); //support json encoded bodies
app.use(bodyParser.urlencoded({extended : false})); // support encoded bodies
app.use(express.static(path.join(__dirname, '../client/build'))); //Serve the static files from the React App

app.get("/", (req, res) => {
    res.json({message: 'Unavailable'});
    //res.sendFile(path.resolve(__dirname, '../client/build/index.html'));
})

app.get('/people', (request, response) => {
    console.log('Request for /people...');
    axios.get(url + '/api/people/')
    .then((res) => {
        response.json({message: successsMsg, isSuccess: true, data : res.data});
    }).catch(err => {
        console.error(err);
        res.json({message: failMsg, isSuccess: false});
    })
})

app.get('/films', (request, response) => {
    console.log('Request for /films...');
    axios.get(url + '/api/films')
    .then(res => {
        response.json({message :successsMsg, isSuccess: true, data: res.data})
    }).catch(err => {
        console.error(err);
        res.json({message: failMsg, isSuccess: false});
    })
})

app.get('/characters', (request, response) => {
    console.log('Request for /characters...');

    //Check if query param exist
    if(!request.query.Urls){
        let msg = 'No Urls query param provided';
        console.error(msg);
        response.statusCode(400).json({message: msg, isSuccess: false});
        return;
    }
    const urls = request.query.Urls;
    
    //Check if there is any empty urls
    const urlsFiltered = urls.filter(url => {
        //return url if it is truthy and don't if its falsy
        if(url) return url
    })  
    axios.all(urlsFiltered.map(url => axios.get(url)))
        .then(axios.spread((...responses) => {
            const data = responses.map( x => x.data);
            console.log(data);
            response.json({message: successsMsg, isSuccess: true, data})
        })).catch(err => {
            console.error(err);
            response.statusCode(200).json({message: failMsg, isSuccess: true});
            return
        })
})

app.listen(config.server.port);

console.log(`App listening on port ${config.server.port}`)