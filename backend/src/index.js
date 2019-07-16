const app = require('./app');

const init = async () => {
  await app.listen(4000);
  console.log('Sever on port: 4000')
}

init();
