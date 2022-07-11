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
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(process.env.LOGIN_URL, {
      waitUntil: 'networkidle2',
    });

    await page.type('#username', req.body.username);
    await page.type('#password', req.body.password);
    await page.select('select', 'students');
    await page.click('[type="submit"]');
    await page.waitForNavigation();

    const cookies = await page.cookies();
    await res.send(cookies);
    await browser.close();
  })();
});
