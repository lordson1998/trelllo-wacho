import type {Request, Response} from "express"
import Project from "../models/project"


export class ProjectController{

    static createProject = async(req: Request, res: Response) => {
        
        const project = new Project(req.body)

        try {
            await project.save()
            res.send('proyecto creado correctamente')
        } catch (error) {
            console.log(error)
        }

    }
    static getAllProjects = async(req: Request, res: Response) => {
        try {
            const projects = await Project.find({})
            res.json(projects)
        } catch (error) {
            console.log(error)
            
        }

    }
    static getProjectById = async(req: Request, res: Response) => {
        const { id } = req.params
        console.log(id)
         try {
            const project = await Project.findById(id)

            if (!project){
                const error = new Error('proyecto no encontrado')
                return res.status(404).json({ error: error.message })
            }
            
            res.json(project)
        } catch (error) {
            console.log(error)
            
        }

    }

}