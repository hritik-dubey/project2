// POST /functionup/colleges
// Create a college - a document for each member of the group

// The logo link will be provided to you by the mentors. This link is a s3 (Amazon's Simple Service) url. Try accessing the link to see if the link is public or not.

// Endpoint: BASE_URL/functionup/colleges
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



// GET /functionup/collegeDetails
// Returns the college details for the requested college (Expect a query parameter by the name collegeName. This is anabbreviated college name. For example iith)
// Returns the list of all interns who have applied for internship at this college.
// The response structure should look like this
const collegeDetails = async function (req, res) {
    try {
        let collegeName = req.query.name;

        if (collegeName) {
            let data = await collegemodel.find({ name: collegeName })
            let collegeid = await collegemodel.find({ name: collegeName }).select({ id: 1 })
            if (datawithid) {
                let interns = await internmodel.find({ collegeId: collegeid })
                return res.status(200).send({ status: true, msg: "interne details", data: interns })
            }

            return res.status(200).send({ status: true, msg: "college details", data: data })
        }
    } catch (error) {
        res.status(500).send({ status: false, error: error.message })
    }
}
module.exports = { createCollege, collegeDetails }