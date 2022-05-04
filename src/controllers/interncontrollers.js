const internmodel = require("../models/internmodel");
const intern = async function (req, res) {
    try {
        let data = req.body;
        let internData = await internmodel.create(data);
        return res.status(201).send({ status: true, msg: "New intern Created Successfully", data: internData })
    } catch (error) {
        res.status(500).send({ status: false, error: error.message })
    }
}


module.exports = { intern }