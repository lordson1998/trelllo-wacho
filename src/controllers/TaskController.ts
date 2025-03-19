import {request, type Request, type Response} from "express"



export class TaskController {
    static createProject = async(req: Request, res: Response) => {
        const { projectid } = request.params
        console.log(projectid)
        try {
            
        } catch (error) {
            console.log(error)
        }
    }



}