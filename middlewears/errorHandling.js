export const errorHandling=((err,req,res,next)=>{
    res.status(err.status||500)
    res.send(err.message||"תקלהלהלהלה")
    })