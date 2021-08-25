var express = require('express');
var app = express();
var session = require('express-session');
var port = 8080;

const listener = app.listen(port, async function() {
  console.log(`Listening on port  ${listener.address().port}`);
});

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(session({secret: 'bdrxzzzz', resave: false, saveUninitialized: true, cookie: {expires: 2.16e+7}}));


app.get('/', function(req, res) {
  res.render('pages/index');
});
