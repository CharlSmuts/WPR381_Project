// routes/pageRoutes.js

const data = require('../Data.js')

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render("./pages/home")
});

router.get('/about', (req, res) => {
    res.render("./pages/about", {
        memberstext:data.membersarray,
        abouttext:data.aboutarray
      });
});

router.get('/events', (req, res) => {
    res.render("./pages/events",{events:data.eventsarray});

});

router.get('/contact', (req, res) => {
    res.render("./pages/contact")
});

router.get('/thankyou', (req, res) => {
    res.render("./pages/thankyou")
});

module.exports = router;
