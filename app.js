const translatte = require('translatte');
//const translate = require('google-translate-api');

var express = require('express');
var cors = require('cors');
var app = express();
app.use(cors());

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/convert', cors(), (request, response) => {
  let body = request.body;
  console.log("request body ====> " + JSON.stringify(body));
  translatte(body.text, { to: body.convertTo }).then(res => {
    console.log(JSON.stringify(res));
    response.json(res);
  }).catch(err => {
    console.error(err);
  });
  // translate(body.text, {to: body.convertTo}).then(res => {
  //   console.log(res.text);
  //   //=> I speak English
  //   console.log(res.from.language.iso);
  //   //=> nl
  // }).catch(err => {
  //     console.error(err);
  // });
})

app.get('/check', cors(), (request, response) => {
  response.write("Application is working fine ", 'utf8', () => {
    console.log("Writing string Data...");
  });
  response.end();
})

const port = 3000;

app.listen(port, function () {
  console.log('server is up and running!!!')
})