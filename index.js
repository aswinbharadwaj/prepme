var Hapi = require('hapi');

// Create a server with a host and port
var server = new Hapi.Server();

// The IP address of the Cloud Foundry DEA (Droplet Execution Agent) that hosts this application:
var host = (process.env.VCAP_APP_HOST || 'localhost');
// The port on the DEA for communication with the application:
var port = (process.env.VCAP_APP_PORT || 3000);

server.connection({
   host: host,
   port: port
});

// Add the route
server.route({
   method: 'GET',
   path:'/hello',
   handler: function (req, reply) {
      reply('hello world');
   }
});

server.route({
    method: 'GET',
    path: '/webhook',
    handler: function (req, reply) {
        if ( req.query['hub.verify_token'] === 'EAANY771Df8wBANaxIsyrMeiVF3QZB8KtvTZC9boobXYGMZCSPWC02vlfiraWDfIRs4rJTBBG1opF5TqCNZBZCXp3RZBGtCB5oell5DbPAHPVdva5PmhObZAsmkmaeqcM9ubxkk0GgKZCpG5lf6y2oxm8kAK54nZBKVZBZB7xiVZCc61h9wZDZD') {
            reply.send(req.query['hub.challenge'];
        } else {
            reply.send('Error, wrong validation code');
        }
    }
});



// Start the server
server.start();
