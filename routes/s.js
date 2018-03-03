var express = require('express');
var router = express.Router();
router.get('/:l',function (req,res,next) {
    res.render('s/'+req.params.l);
});
router.post('/6',function (req,res,next) {
    const accounts =require('../auth.json');
    const bcrypt = require('bcrypt');
    for(let account in accounts)
        if(0 ===accounts[account].username.localeCompare( req.body.login))
            if(bcrypt.compareSync(req.body.password,accounts[account].password))
               return  res.render('s/6success.pug');
     return  res.render('s/error.pug');
});

module.exports = router;
