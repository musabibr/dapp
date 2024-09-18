require('dotenv').config();
const app = require('./src/app')
const connectToDatabase = require('./src/config/db');
const ErrorHandler = require('./src/utils/error-handler');

const { PORT } = process.env;
ErrorHandler(app);


const startServer = () => {
    try {
        app.listen(PORT, () => {
            console.log(`Server is listening on port ${PORT}`);
            connectToDatabase();
        });
    } catch (error) {
        console.log(error.message);
    }
};

startServer(); 