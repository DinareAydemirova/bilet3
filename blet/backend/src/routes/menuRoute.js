const express = require("express")
const router = express.Router()
const menuController=require("./../controllers/menuController")

router.get("/menu", menuController.getAllData)
router.post("/menu", menuController.postData)
router.get("/menu/:id", menuController.getDataById)
router.delete("/menu/:id", menuController.deleteDataById)
router.patch("/menu/:id", menuController.patchDataById)
router.put("/menu/:id", menuController.putDataById)






module.exports = router