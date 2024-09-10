import { hashpassword } from "../helper/authHelper.js"
import doctorModel from "../models/doctorModel.js"


export const docRegisterController = async (req, res) => {
    try {

        const { name, email, phone, address, time, experience, experty, password } = req.body

        // photo of doctor will be uploaded on cloudinary and string will used for the image address 

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

        if (!time) {
            res.send({ error: 'visiting hours is required' })
        }

        if (!experience) {
            res.send({ error: 'experience is required' })
        }

        if (!experty) {
            res.send({ error: 'experty is required' })
        }

        if (!password) {
            res.send({ error: 'Password is required' })
        }

        const existing_user = await doctorModel.findOne({ email })

        if (existing_user) {
            return res.status(400).send({
                success: false,
                message: "User aleady exist with this mail"
            })
        }

        const hashed_password = await hashpassword(password)

        const user = await new doctorModel({ name, email, phone, address, time, experience, experty, password: hashed_password }).save()

        res.status(200).send({
            success: true,
            message: "User Registered successfully",
            user: {
                name,
                email,
                phone,
                address,
                time,
                experience,
                experty,
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