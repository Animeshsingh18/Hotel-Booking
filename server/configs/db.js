import mongoose from "mongoose";

const connectDB = async () => {

    try {
        mongoose.connection.on('connected', () => console.log("Database Connected"));// it is an event
        await mongoose.connect(`${process.env.MONGODB_URI}/hotel-booking`);
    } catch (error) {
        console.error(error.message);
    }

};

export default connectDB;
// Note: Do not use the '@' symbol in your database user's password.