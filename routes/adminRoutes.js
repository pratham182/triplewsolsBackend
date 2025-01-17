const { getAllSubmissions } = require("../controllers/adminController");

const express=require("express")
const router = express.Router();

router.get("/users", getAllSubmissions);
module.exports = router;
