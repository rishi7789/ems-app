const express = require("express")
const router = express.Router();
require('dotenv').config()
const AddEmp = require('../model/addData')


router.post("/add", async (req, res) => {

    try {

        let { empid, empname, salary, department } = req.body;
        let newEmp = await AddEmp.create({ empid, empname, salary, department })

        res.status(201).json(
            {
                msg: "Employee added successfully"
            });

    }
    catch (error) {
        res.status(400).send({ msg: "page not found " })
    }
})

router.get("/display", async (req, res) => {
    try {
        let emp = await AddEmp.find();
        if (!emp) {
            return res.status(404).json({ message: "employee not found" })
        }
        res.status(200).json(emp);
    } catch (error) {
        console.log(error);

    }
})
router.delete("/delete/:id", async (req, res) => {
    try {
        const empID = parseInt(req.params.id);
        let deleteEmp = await AddEmp.findOneAndDelete({ empid: empID });
        if (!deleteEmp) {
            return res.status(404).json({ message: "Employee not found" });
        }
        res.status(200).json({ message: "Employee deleted successfully", deleteEmp });

    } catch (error) {
        console.log(error);

    }
})

router.put("/update/:id", async (req, res) => {
    try {
        const empID = parseInt(req.params.id);
        const updateData = req.body;
        let updateEmp = await AddEmp.findOneAndUpdate({ empid: empID }, updateData);
        if (!updateEmp) {
            return res.status(404).json({ message: "Employee not found" });
        }
        res.status(200).json({ message: "Employee updated successfully", updateEmp });

    } catch (error) {
        console.log(error);

    }
})

module.exports = router;