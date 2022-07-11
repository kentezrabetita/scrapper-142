const express = require('express');
require('dotenv').config();

const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.listen(3000, (req, res) => {
  console.log('🚀 Server is runnning!');
});
