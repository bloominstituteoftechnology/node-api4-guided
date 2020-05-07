const server = require("./api/server.js");

// Heroku will add the PORT variable to the enviroment
const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
