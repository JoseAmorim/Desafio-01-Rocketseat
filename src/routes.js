const { Router } = require('express')

const ProjectController = require('./app/controllers/ProjectController')
const TaskController = require('./app/controllers/TaskController')

const checkId = require('./app/middlewares/checkId')

const routes = Router()

routes.get('/projects', ProjectController.index)
routes.post('/projects', ProjectController.store)
routes.put('/projects/:id', checkId, ProjectController.update)
routes.delete('/projects/:id', checkId, ProjectController.delete)

routes.post('/projects/:id/tasks', checkId, TaskController.store)

module.exports = routes
