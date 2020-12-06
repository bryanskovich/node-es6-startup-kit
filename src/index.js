import {express,dotenv} from 'express-mongo-api-setup'
import {errorHandler} from 'express-api-error-handler-v2'
import dbErrorHanler from './utils/dbErrorHanler';
dotenv.config()
const app = express()
const port = process.env.PORT || 5000;
app.use(errorHandler)
app.use(dbErrorHanler)
app.listen(5000, () => console.log(`Server running on port ${port} 🔥`));