var express = require('express');
var router = express.Router();

/* GET users listing. */

router.get('/2',function (req,res,next) {
    res.render('/s2');
});
module.exports = router;
