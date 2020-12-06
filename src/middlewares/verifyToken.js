import {  AppError } from "express-api-error-handler-v2";
import { decodeToken } from '../utils/tokenManager';
export default async function (req,res,next)  {
    try {
        const header =  req.query.token || req.headers["authorization"];
        if (!header) {
            throw new AppError(`Missing token`, {}, 401);
        }
        const token = header.replace("Bearer ", "");
        const decoded = decodeToken(token)
        req.user = decoded.user;
        next()
    } catch (error) {
        console.log(error.message);
        throw new AppError("Token validation failed",{},401)
    }
}