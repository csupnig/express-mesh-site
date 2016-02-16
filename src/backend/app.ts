var express = require('express');
var http = require('http');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var swig = require('swig');
var cons = require('consolidate');
var mesh = require('express-mesh');

var port  = process.env.PORT || 8089,
    app  = express(),
    server = http.createServer(app),
    viewDir = __dirname + '/views',
    Mesh = new mesh.Mesh(app,mesh.MeshConfig.createSimpleConfiguration('demo'));

app.set('views', viewDir);
app.engine('html', cons.swig);
app.set('view engine', 'html');
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
    secret: 'mysupersecuresessionsecret',
    resave: false,
    saveUninitialized: false
}));
// serving of static resources 
app.use(express.static(path.join(__dirname, 'public')));
// if we want to have the mesh template filters, we need to register them 
Mesh.registerTemplateFilters(swig);
// initialize the mesh frontend 
Mesh.server(app);

process.on('uncaughtException', (err) => {
    // handle the error safely
    console.error(err);
    process.exit(1);
});

server.listen(port, () => {
    console.log("Express server listening on port " + port);
});
