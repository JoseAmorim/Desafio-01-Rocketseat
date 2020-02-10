class Database {
    constructor() {
        this.projects = []
    }

    checkId(id) {
        const indexOf = this.projects.findIndex(
            (storedProject) => storedProject.id === id,
        )

        if (indexOf > -1) return true

        return false
    }

    setProject(project) {
        const indexOf = this.projects.findIndex(
            (storedProject) => storedProject.id === project.id,
        )

        if (indexOf > -1) {
            return null
        }

        this.projects.push(project)

        return project
    }

    changeProject(id, title) {
        const indexOf = this.projects.findIndex(
            (storedProject) => storedProject.id === id,
        )

        if (indexOf > -1) {
            const changedProject = this.projects[indexOf]

            changedProject.title = title

            this.projects[indexOf] = changedProject

            return this.projects[indexOf]
        }

        return null
    }

    deleteProject(id) {
        const indexOf = this.projects.findIndex(
            (storedProject) => storedProject.id === id,
        )

        if (indexOf > -1) {
            this.projects.splice(indexOf, 1)

            return this.projects
        }

        return null
    }

    getProjects() {
        return this.projects
    }

    setTask(id, title) {
        const indexOf = this.projects.findIndex(
            (storedProject) => storedProject.id === id,
        )

        if (indexOf > -1) {
            const changedProject = this.projects[indexOf]

            changedProject.tasks.push(title)

            this.projects[indexOf] = changedProject

            return this.projects[indexOf]
        }

        return null
    }
}

module.exports = new Database()
