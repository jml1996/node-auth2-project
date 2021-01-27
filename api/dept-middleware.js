module.exports = department => (req, res, next) => {
    if (req.decodedJwt && req.decodedJwt.department === department) {
        next()
    } else {
        res.status(403).json('You are not an admin')
    }
}