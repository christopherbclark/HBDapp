const express = require('express');
const viewsController = require('../controllers/viewsController');

const router = express.Router();

router.get('/', viewsController.getLanding);
router.get('/signin', viewsController.getSignIn);
router.get('/dashboard', viewsController.getIndex);
router.get('/upgrade', viewsController.upgrade);
router.get('/blog', viewsController.blog);

module.exports = router;
