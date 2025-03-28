import {Request, Response} from "express"
import Task from "../models/task"



export class TaskController {
    static createTask = async(req: Request, res: Response) => {
        
        try {
            const task = new Task(req.body)
            task.project = req.project.id
            req.project.tasks.push(task.id)
            await Promise.allSettled([task.save(), req.project.save()])
            res.send("Tarea creada correctamente") 
        } catch (error) {
            console.log(error)
        }
    }



}