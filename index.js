require('dotenv').config();
const server = require("./api/server.js");

const port = process.env.PORT;
// export PORT=6000
// unset PORT
// const port = 6000;
server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});

// CI/CD pipeline stages:
// * development (dev)
// * test
// * staging
// * --- manual gate
// * production