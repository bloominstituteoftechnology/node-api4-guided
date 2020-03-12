require('dotenv').config(); //read from a .env file located at the root of the project
//and merge the key value pairs into process.env

const server = require("./api/server.js");

//have the server assign the port
//heroku will place the .PORT environment value on their server
const port = process.env.PORT || 5100;
server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});

//add start script to package.json that uses node to run the API