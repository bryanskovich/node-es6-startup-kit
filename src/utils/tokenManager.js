import {jwt} from 'express-mongo-api-setup'
const JWT_SECRET=process.env.JWT_SECRET
export const generateToken = (payload,expires) => {
    return jwt.sign(payload,JWT_SECRET,{
        expiresIn:expires||'90 days'
    })
}

export const decodeToken = (token) => {
    return jwt.verify(token,JWT_SECRET)
}