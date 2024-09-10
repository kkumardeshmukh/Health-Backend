import mongoose from "mongoose";

const doctorScheme = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    // photo: {
    //     type: String,
    //     required: true
    // },
    address: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    experience: {
        type: String,
        required: true
    },
    experty: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true })

export default mongoose.model('doctor', doctorScheme)