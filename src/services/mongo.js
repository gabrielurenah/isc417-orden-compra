const mongoose = require('mongoose');
const wrapper = require('../middlewares/async');

connectToDB = async () => {
  const [err, connection] = await wrapper(
    mongoose.connect('mongodb://localhost:27017/isc417', {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    })
  );

  if (err) {
    console.log('ERROR⚠️\n', err);
    process.exit(1);
  }
};

module.exports = connectToDB;
