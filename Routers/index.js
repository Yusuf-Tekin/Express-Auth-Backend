const expres = require('express');
const router = expres();
const UserRouter = require('./User/user')
const AdminRouter = require('./Admin/admin');
const { HomeController } = require('../Controller/Home/HomeController');
const { tokenControl } = require('../Helper/Token/TokenControl');



router.use('/user',UserRouter)
router.use('/admin',AdminRouter)

router.get('/home',tokenControl,HomeController)

module.exports = router;