module.exports = (req, res, next) => {
    const database = require('../../database')

    const { id } = req.params

    if (!id) return next()

    const checkId = database.checkId(Number(id))

    if (!checkId)
        return res
            .status(401)
            .json({ error: 'Não foi encontrado um projeto com esse id.' })

    return next()
}
