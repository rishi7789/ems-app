const express = require("express")
const router = express.Router();
require('dotenv').config()
const { body, validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const Register = require('../model/register')


router.post("/register", [body('email').isEmail(), body('password').isLength({ min: 5 })], async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    try {

        let { name, email, phone, password } = req.body;

        let userExist = await Register.findOne({ email: email })
        if (userExist) {
            return res.status(400).json({ msg: "Email already exists" })
        }
        let hashedPassword = await bcrypt.hash(password, 10);
        password = hashedPassword;
        let createUser = await Register.create({ name, email, phone, password })

        res.status(201).json(
            {
                msg: "Registration successfull"
            });

    }
    catch (error) {
        res.status(400).send({ msg: "page not found " })
    }
}
)

router.post("/login", async (req, res) => {
    try {
        let { email, password } = req.body;
        let userExist = await Register.findOne({ email });
        if (!userExist) {
            return res.status(400).json({ message: "Invalid credentials" })
        }

        let pwdcompare = await bcrypt.compare(password, userExist.password)

        let data = {
            user: {
                id: userExist.id
            }
        }
        let token = jwt.sign(data, process.env.JWT_SECRET_KEY || "poiuytrewq")


        if (pwdcompare) {
            res.status(201).json(
                {
                    msg: "Login successfull",
                    authtoken: token
                });
        }
        else {
            res.status(401).json({ message: "Invalid credentials" })
        }
    } catch (error) {
        res.status(500).json("Internal server error")
    }

})

module.exports = router;