var express = require('express');
var router = express.Router();
router.get('/:l',function (req,res,next) {
    res.render('a/'+req.params.l);
});
module.exports = router;
