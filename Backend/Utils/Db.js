const mongoose = require('mongoose');


const URI = process.env.MONGO_URL;

const connectDb = async () => {
  try {
    await mongoose.connect(URI);
    console.log('Connected to MongoDB successfully!');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
};

module.exports = connectDb;