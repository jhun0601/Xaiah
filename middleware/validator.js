const {check} = require('express-validator');

exports.signupValidator = [
    check('username')
        .not().isEmpty()
        .trim()
        .withMessage('All fields required'),
    check('email')
        .isEmail()
        .normalizeEmail()
        .withMessage('Invalid Email'),
    check('password')
        .isLength({min:8})
        .withMessage('password must be at least 8 characters long')
]