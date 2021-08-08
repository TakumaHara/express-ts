import Express from 'express'
import usersController from '../controllers/usersController'

const router=Express.Router()

router.get('/',usersController.index,usersController.indexView)
router.get('/new',usersController.new)
router.post('/create',usersController.create,usersController.redirectView)

export default router