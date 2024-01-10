import pkg from 'jsonwebtoken'
const {jwt}=pkg;
export const generateToken=(user)=>{
    let token=jwt.sign(
        { _id: user._id, userName: user.userName, role: user.role },
        process.env.JWT_SECRET,
        {
            expiresIn:"5m"
        }
    )
}