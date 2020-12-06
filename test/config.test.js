import { expect } from 'chai';
import {dotenv} from 'express-mongo-api-setup'
dotenv.config()
describe('Env configuration', () => {
    it("Should return string",()=>{
        expect(process.env.NODE_ENV).to.be.a('string')
    })
    
})