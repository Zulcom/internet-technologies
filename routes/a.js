var express = require('express');
var router = express.Router();

/* GET users listing. */

router.get('/2',function (req,res,next) {
    res.render('a/2');
});
router.get('/3',function (req,res,next) {
    res.render('s/3');
});
module.exports = router;
