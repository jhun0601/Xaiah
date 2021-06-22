const User = require('../models/User');
const bcrypt = require('bcryptjs');

exports.signupController = async (req, res) => {
    // console.log('request body: ', req.body);
    const {username, email, password} = req.body;

    try {
        const user = await User.findOne({email});

        if(user) {
            return res.status(400).json({
                errorMessage: 'Email already exist'
            })
        }

        const newUser = new User();
        newUser.username = username;
        newUser.email = email;
        
        const salt =  await bcrypt.genSalt(10);
        newUser.password = await bcrypt.hash(password, salt);
        // console.log(newUser.password)
        await newUser.save();

    } catch (error) {
        console.log('signupController error', error)
    }
}