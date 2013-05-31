// Initialize
var application_root = __dirname,
    express = require("express"),
    path = require("path");
    //mongoose = require('mongoose');
var app = module.exports = express();

// Database
// mongoose.connect('mongodb://' + process.env.IP +'/cutlassDB');

// Config
app.configure(function () {
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(application_root, "public")));
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

// Test API
app.get('/api', function (req, res) {
  res.send('The Cutlass API is up and running!');
});

// Launch server
app.listen(process.env.PORT, process.env.IP);