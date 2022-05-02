import * as mongoose from 'mongoose';

export const MongoDbProvider = {
  provide: 'MONGO_DATABASE_CONNECTION',
  useFactory: (): Promise<typeof mongoose> =>
    mongoose.connect(
      'mongodb+srv://ExamDbAdmin:FUsojJp2aLCRA3kZ@cluster0.0a3ej.mongodb.net/Database?retryWrites=true&w=majority',
    ),
};
