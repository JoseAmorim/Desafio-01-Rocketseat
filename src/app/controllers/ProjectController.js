const database = require('../../database')

class ProjectController {
    async index(req, res) {
        const projects = database.getProjects()

        projects.sort((p1, p2) => p1.id - p2.id)

        return res.json(projects)
    }

    async store(req, res) {
        const { id, title } = req.body

        const project = database.setProject({
            id,
            title,
            tasks: [],
        })

        if (!project)
            return res
                .status(400)
                .json({ error: 'Projeto com id cadastrado já existe.' })

        return res.json(project)
    }

    async update(req, res) {
        const { id } = req.params
        const { title } = req.body

        console.log(req)

        const project = database.changeProject(Number(id), title)

        return res.json(project)
    }

    async delete(req, res) {
        const { id } = req.params

        const project = database.deleteProject(Number(id))

        return res.json()
    }
}

module.exports = new ProjectController()
