let count = 0

module.exports = (req, res, next) => {
    count += 1

    console.log(count)

    return next()
}
