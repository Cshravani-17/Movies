const path = require('path');
//const file = require('./mainpage.html')
const express = require('express');
const app = express();
const request = require('request');
const port = 3000;
app.set("view engine", "ejs");
var url = 'https://raw.githubusercontent.com/FEND16/movie-json-data/master/json/movies-coming-soon.json';


app.get("/", (req, res) => {
    
    request(url,{ json : true},function(error, response, body){
        if (!error && response.statusCode === 200) {
          console.log(body);
          res.render("index",{data :body});
        }
     });
    
  });
app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))


