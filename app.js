// Initialize
var application_root = __dirname,
    express = require("express"),
    path = require("path");
//    restful = require('node-restful'),
//    mongoose = restful.mongoose;
var app = express();

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

// Register Models

// Launch server
app.listen(process.env.PORT, process.env.IP);