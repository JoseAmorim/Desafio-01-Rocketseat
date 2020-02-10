const database = require('../../database')

class TaskController {
    async store(req, res) {
        const { id } = req.params
        const { title } = req.body

        const project = database.setTask(Number(id), title)

        if (!project)
            return res
                .status(400)
                .json({ error: 'Não existe projetos com o id informado.' })

        return res.json(project)
    }
}

module.exports = new TaskController()
