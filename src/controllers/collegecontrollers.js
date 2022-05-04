const collegemodel = require("../models/collegemodel");
const internmodel = require("../models/internmodel");
const createCollege = async function (req, res) {
    try {
        let data = req.body;
        let collegeData = await collegemodel.create(data)
        return res.status(201).send({ status: true, msg: "New Blog Created Successfully", data: collegeData })
    } catch (error) {
        res.status(500).send({ status: false, error: error.message })
    }
}

const collegeDetails = async function (req, res) {
    try {
        let collegeName = req.query.name;
        let emptyobj = {}
        if (collegeName) {
            let collegeinfo = await collegemodel.findOne({ name: collegeName })
            emptyobj.name = collegeinfo.name;
            emptyobj.fullName = collegeinfo.fullName;
            emptyobj.logoLink = collegeinfo.logoLink;
            let collegeid = await collegemodel.find({ name: collegeName }).select({ id: 1 })
            if (collegeid) {
                let interns = await internmodel.find({ collegeId: collegeid })
                emptyobj.interests = interns
                return res.status(200).send({ status: true, msg: "intern details", data: emptyobj })
            }
        }
    } catch (error) {
        res.status(500).send({ status: false, error: error.message })
    }
}
module.exports = { createCollege, collegeDetails }
