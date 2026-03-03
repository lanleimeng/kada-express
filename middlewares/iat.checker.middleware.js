// import errorHandler from "./error.middleware";

export const iatChecker =(req,res,next)=>{
    // const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("iatChecker");
    const iatCheck = req.user.iat;
    const now = Math.floor(Date.now() / 1000);
// if (now - iatCheck > 1) {
//     next("aiueo");
// }
next();



}