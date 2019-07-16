module.exports= app => {
  app.get('/users', (req, res) => res.send(`I'm on users`));
  app.get('/notes', (req, res) => res.send(`I'm on notes`));
}