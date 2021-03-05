const path = require('path')
const jwt = require('jwt')
require("dotenv").config({ path: path.resolve(__dirname, '../.env') })

const verifyJWTToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decodeToken) => {
      if(err || !decodeToken) {
        return reject(err)
      }

      resolve(decodeToken)
    })
  })
}

module.exports = {
  verifyJWTToken
}