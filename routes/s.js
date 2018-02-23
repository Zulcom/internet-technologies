var express = require('express');
var router = express.Router();
router.get('/:l',function (req,res,next) {
    res.render('s/'+req.params.l);
});

module.exports = router;
