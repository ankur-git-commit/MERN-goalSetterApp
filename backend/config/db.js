import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        const baseUri = process.env.MONGO_URI
        const dbName = 'mernapp'

        const conn = await mongoose.connect(baseUri, {
            dbName: dbName
        })
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

export default connectDB