import { Router } from "express";
import { body, param } from "express-validator";
import { ProjectController } from "../controllers/ProjectController";
import { handleImputErrors } from "../middleware/validation";


const router = Router()

router.post('/',
    body('projectName')
       .notEmpty().withMessage('el nombre del proyecto es obligatorio'),
    body('clientName')
       .notEmpty().withMessage('el nombre del cliente es obligatorio'),
    body('description')
       .notEmpty().withMessage('la descripcion es obligatoria'),
       handleImputErrors,
    

     ProjectController.createProject
    
    )
router.get('/', ProjectController.getAllProjects);



router.get('/:id',
   param('id').isMongoId().withMessage('ID no valido'),
   handleImputErrors,
   ProjectController.getProjectById
)



router.put('/:id',
   param('id').isMongoId().withMessage('ID no valido'),
   body('projectName')
       .notEmpty().withMessage('el nombre del proyecto es obligatorio'),
    body('clientName')
       .notEmpty().withMessage('el nombre del cliente es obligatorio'),
    body('description')
       .notEmpty().withMessage('la descripcion es obligatoria'),
       handleImputErrors,
   handleImputErrors,
   ProjectController.updateProject


)

router.delete('/:id',
   param('id').isMongoId().withMessage('ID no valido'),
   handleImputErrors,
   ProjectController.deleteProject
)



export default router;