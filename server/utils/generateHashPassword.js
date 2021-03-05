const bcrypt = require('bcrypt')

const generateHashPassword = async (password) => bcrypt.hash(password, await bcrypt.genSalt())

const comparePassword = async (password, restaurantPassword) => bcrypt.compare(password, restaurantPassword)

module.exports = { generateHashPassword, comparePassword }