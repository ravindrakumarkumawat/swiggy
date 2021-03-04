const bcrypt = require('bcrypt')

const generateHashPassword = async (password) => bcrypt.hash(password, await bcrypt.genSalt())

module.exports = { generateHashPassword }