import mongoose from 'mongoose';

export default function () {
  mongoose
    .connect('mongodb://localhost:27017/isc417', {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    })
    .then(() => {})
    .catch(err => {
      console.log('ERROR⚠️', err);
    });
}
