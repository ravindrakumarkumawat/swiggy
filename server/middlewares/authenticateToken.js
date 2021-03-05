const { verifyJWTToken } = require('../libs/auth')

function authenticateToken(req, res, next) {
  const authHeader = req.headers.authorization

  const token = authHeader && authHeader.split(' ')[1]
  if (token == null) return res.sendStatus(401)

  verifyJWTToken(token).then((decodedToken) =>
  {
    req.id = decodedToken.id
    next()
  }).catch((err) => {
    res.status(403)
      .json({message: "Invalid auth token provided."})
  })
}


module.exports = { authenticateToken }