const express = require("express");
const router = express.Router();

const upload=require("../config/multerConfig");
const { submitUserData } = require("../controllers/userController");


router.post("/submissions", upload.array("images"), submitUserData); 
module.exports = router;
