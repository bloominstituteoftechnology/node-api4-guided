const server = require('./api/server.js');

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log(`\n*** Server Running on http://localhost:${PORT} ***\n`);
});
