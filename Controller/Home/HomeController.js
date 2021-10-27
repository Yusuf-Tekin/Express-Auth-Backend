const expressAsyncHandler = require("express-async-handler");
const { CustomErr } = require("../../Helper/Error/CustomError");
const { tokenControl } = require("../../Helper/Token/TokenControl");


const HomeController = expressAsyncHandler(async(req,res,next) => {

    res.send('Home Page')
})

module.exports = {
    HomeController
}