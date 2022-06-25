const express = require('express');
const app = express();
const router = express.Router();
const {getController,postController,putController,deleteController} = require("../controller/controller")


router.get("/",getController)
router.post('/',postController)
router.put('/:id',putController)
router.delete("/:id",deleteController)


module.exports = {router}