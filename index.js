var express = require('express');
var router = express.Router();

//GET Home Page

router.get('./index', function(req, res, next) {
    res.render('./index', { title: 'Welcome to Rvnt!', condition: false});
});

module.exports = router;
