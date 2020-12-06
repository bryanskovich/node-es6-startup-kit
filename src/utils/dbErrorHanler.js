import {BaseError } from'sequelize'
export default (err,req,res,next) => {
    if(err instanceof BaseError) {
        console.log(`Error comming from database`);
        return res.status(500).json({
            success:false,
            error:true,
            name:err.name,
            message:err.message
        })
    }
    
}