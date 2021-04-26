const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const connectiion = await mongoose.connect(
      'mongodb+srv://Diane:Diane@dianescluster.nqqej.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
      }
    );

    console.log('MongoDB connected');
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;
