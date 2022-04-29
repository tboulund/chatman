import * as mongoose from 'mongoose';

export const MongoDbProvider = {
  provide: 'MONGO_DATABASE_CONNECTION',
  useFactory: (): Promise<typeof mongoose> =>
    mongoose.connect(
      'mongodb+srv://TestDBUser:CodeWordForTesting@cluster0.hd0tk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    ),
};
