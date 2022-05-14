import {Router} from 'express'
import * as auth from '../controllers/auth.controller'
import * as token from '../middlewares/token.middleware'

const router = Router()

router.post('/login', auth.login)
router.post('/logout', token.authenticateToken,  auth.logout)

module.exports = router;