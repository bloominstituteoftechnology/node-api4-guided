// As earliest as possible. In in the index.js file
require('dotenv').config(); 
// read from a .env file located at the root folder/project
// and merge the key/value pairs into process.env

const server = require("./api/server.js");

// make the port be assigned by the Serer
// heroku will place the .PORT environment value on their server
const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});

// add a "start" script to package.json that uses node to run the API