import { Router } from "express";
import { getEmployees , createEmployee, updateEmployee, deleteEmployee, getEmployee} from "../controllers/employees.controller.js";

const router = Router ()
//ruta devuelve todos los empleados
router.get('/employees', getEmployees)

//ruta devuelve un empleado en base al id
router.get('/employees/:id', getEmployee)

router.post('/employees', createEmployee)

router.patch('/employees/:id', updateEmployee)

//si actualizas todo usas put si solo son ciertas cosas patch 

router.delete('/employees/:id', deleteEmployee)



export default router