const {authenticator} = require('otplib')
const secret = () => {
    const secret = authenticator.generateSecret();
    return secret
}

module.exports = {secret}