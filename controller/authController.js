import { hashpassword } from "../helper/authHelper.js"
import userModel from "../models/userModel.js"

export const registerController = async (req, res) => {
    try {

        const { name, email, phone, address, password } = req.body

        if (!name) {
            res.send({ error: 'Name is required' })
        }

        if (!email) {
            res.send({ error: 'Email is required' })
        }

        if (!phone) {
            res.send({ error: 'Phone number is Required is required' })
        }

        if (!address) {
            res.send({ error: 'Address is required' })
        }

        if (!password) {
            res.send({ error: 'Password is required' })
        }

        const existing_user = await userModel.findOne({ email })

        if (existing_user) {
            return res.status(400).send({
                success: false,
                message: "User aleady exist with this mail"
            })
        }

        const hashed_password = await hashpassword(password)

        const user = await new userModel({ name, email, phone, address, password: hashed_password }).save()

        res.status(200).send({
            success: true,
            message: "User Registered successfully",
            user: {
                name,
                email,
                phone,
                address,
                password,
                hashed_password
            }
        })





    } catch (error) {
        console.log(error)
        return res.status(400).send({
            success: false,
            message: 'error while registering user',
            error
        })
    }


}