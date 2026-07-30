import mongoose from 'mongoose';


export function connectToDB () {
    mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Database Connected");
    })
    .catch((err) => {
        console.log("Error to Connect Database!", err);
    })
}