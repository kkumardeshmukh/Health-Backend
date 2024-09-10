import mongoose from "mongoose";

const connectDB = async () => {

    await mongoose.connect('mongodb://127.0.0.1:27017/HEATH-CARE').then(() => {
        console.log("MONGODB is CONNECTED SUCCESSFULLY".bgGreen.black)
    }).catch(() => {
        console.log("ERROR WHILE CONNECTING MONGODB".bgRed.white)
    })
}

export default connectDB