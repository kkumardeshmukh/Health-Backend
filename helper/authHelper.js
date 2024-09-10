import bcrypt from "bcrypt"

export const hashpassword = async (password) => {

    try {
        const saltRound = 10;
        const hashedpassword = await bcrypt.hash(password, saltRound)

        return hashedpassword

    } catch (error) {
        console.log("Error While hashing password")
        console.log(error)
    }
}