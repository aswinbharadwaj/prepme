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
 
// Start the server
server.start();