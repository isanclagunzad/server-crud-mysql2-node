const express = require('express');
const app = express();
const db = require('./models');
const cors = require('cors');
const port = 8001;

// middlewares
app.use(express.json());
app.use(cors());

// Routers
const postRouter = require('./routes/Posts');
app.use('/posts', postRouter);
app.use('/get', postRouter);

db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log('Server running on port ' + port);
  });
});
