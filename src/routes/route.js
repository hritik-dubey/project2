const express = require('express');

const router = express.Router();

const college = require("../controllers/collegecontrollers");
const intern = require("../controllers/interncontrollers")
router.post("/createintern",intern.intern)
router.post("/createCollege",college.createCollege)
router.get("/collegeDetails",college.collegeDetails)

module.exports = router;