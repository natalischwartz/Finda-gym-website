import { Router } from 'express'
const router = Router()



//routes
router.get('/', (req,res) =>{
    res.render("index" , {
    });
} )

export default router