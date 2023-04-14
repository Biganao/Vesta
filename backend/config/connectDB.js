const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI)
    
        console.log(`MongoDB Connected`);
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

module.exports = connectDB

// Use this function in server.js to connect with mongoDb and start the server

// const startServer = async () => {
//     try {
//         await connectDB()
//         app.listen(PORT, () => {
//             console.log(`Server Running on Port ${PORT}`);
//         })
        
//     } catch (error) {
//         console.log(error);
//     }
// }

// startServer()