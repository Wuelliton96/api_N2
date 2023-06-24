import  express  from "express";
import controle from "../controllers/prestador_controlles.js"

const router = express.Router()
router.get('/',controle.getPrestadoress)
router.get('/:cpf', controle.getPrestadores)
router.post('/', controle.createPrestador)
router.put('/:id', controle.updatePrestador)
router.delete('/:id',controle.deletePrestador)

export default router