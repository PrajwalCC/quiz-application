// import mongoose from "mongoose";
// mongoose.set('strictQuery', true);
// export default async function connectDB() {
//     const mongoURI = process.env.ATLAS_URI
//     mongoose.connect(mongoURI)
//     console.log("Database Connected")

//     try {
//         mongoose.connect(mongoURI, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//     } catch (err) {
//         console.error('Initial Database Connection Error!', err);
//     }
//     try {
//         mongoose.connection.on('connected', _ =>
//             console.log('Database connected ==> ', mongoURI)
//         );

//         mongoose.connection.on('error', err =>
//             console.error('Database Connection Error!\n', err)
//         );
//     } catch (error) {
//         console.log(error.message);
//     }
// }

import mongoose from "mongoose";
mongoose.set('strictQuery', true);
export default async function connect(){
    mongoose.connect(process.env.ATLAS_URI)
    console.log("Database Connected")
}