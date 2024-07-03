import express from 'express'
import { addFood,listFood,removeFood } from '../controllers/foodControllers.js'
import multer from "multer"

const foodRouter = express.Router();
// Using the above router we can create many other methods like get, post, request and many more

// Image Storage engine

const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null, `${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage})

foodRouter.post("/add",upload.single("image"),addFood)
foodRouter.get("/list",listFood)
foodRouter.post("/remove",removeFood)


export default foodRouter;