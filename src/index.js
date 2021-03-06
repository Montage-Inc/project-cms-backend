const {auth} = require('./auth/views')
const {billing} = require('./billing')
const {datastore} = require('./datastore')
const express = require('express');
const publisher = require('buildicus-publisher').app;


function connectRestify(server) {
  return function(req, res) {
    server.server.emit('request', req, res);
  }
}

//console.log("apps:", auth, publisher, billing, datastore);
var app = express();
app.use('/auth', connectRestify(auth));
app.use('/site', publisher);
app.use('/billing', billing);
app.use('/datastore', connectRestify(datastore));
app.use('/project-cms', express.static(__dirname + '/../project-cms'));

app.listen(8000, function () {
  console.log('Backend listening on port 8000!');
});
