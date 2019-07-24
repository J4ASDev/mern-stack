require('dotenv').config();
const app = require('./app');
require('./db');
const port = process.env.SERVER_PORT || 4000;

const init = async () => {
  await app.listen(port);
  console.log(`Server on port: ${port}`);
}

init();
