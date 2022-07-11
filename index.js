const express = require('express');
const puppeteer = require('puppeteer');
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

app.get('/login', (req, res) => {
  (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://example.com');
    await page.screenshot({ path: 'example.png' });

    await browser.close();
  })();
});
