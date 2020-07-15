import mongoose from 'mongoose';

export default function () {
  mongoose
    .connect('mongodb://mongo:27017/isc417', {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    })
    .then(() => console.log('se conecto a mongo'))
    .catch(err => {
      console.log('ERROR⚠️\n', err);
      process.exit(1);
    });
}
