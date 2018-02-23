var express = require('express');
var router = express.Router();
router.get('/5',function (req,res,next) {
    res.setHeader('Content-Type', 'application/json');
    res.send(' { "gallery":"My gallery","images":[{"name":"cat","file":"https://www.cats.org.uk/uploads/images/featurebox_sidebar_kids/grief-and-loss.jpg"}, {"name":"dog","file":"https://www.nationalgeographic.com/content/dam/animals/thumbs/rights-exempt/mammals/d/domestic-dog_thumb.jpg"}, {"name":"bunny","file":"https://www.petakids.com/wp-content/uploads/2015/11/Cute-Red-Bunny.jpg"}]}');
});

module.exports = router;
