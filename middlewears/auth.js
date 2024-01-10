//מידלוור לאימות משתמש
import pkg from 'jsonwebtoken'
const {jwt}=pkg;
//אימות משתמש
export const authenticate=(req,res,next)=>{
let token=req.header["my-token"];
if(!token)
return res.status(403).send("missing token")
try{
    req.myUser=jwt.verify(token,process.env.JWT_SECRET);
      //!!!!
      next();
      //!!!!!
}
catch{
return res.status(401).send("token not updated")

}
}
//אימות מנהל
export const authenticateAdmin=(req,res,next)=>{
    let token=req.header["my-token"];
    if(!token)
    return res.status(403).send("missing token")
    try{
        let user=jwt.verify(token,process.env.JWT_SECRET);
        if(user.role=="ADMIN"){
            req.myuser=user;
        next();
        }
        else
    return res.status(403).send("not premited")

       
    }
    catch{
    return res.status(401).send("token not updated")
    
    }}