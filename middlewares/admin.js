const upload = require("./uploads");

module.exports = (req, res, next) => {
    const { admin } = req.query;

    if(!admin || admin != 'banana'){
        res.redirect('/home');
    }
    console.log(admin);
    next();
};