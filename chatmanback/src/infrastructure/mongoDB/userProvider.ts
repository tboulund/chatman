import { Connection } from 'mongoose';
import { UserSchema } from './userSchema';
export const userProvider = [
  {
    provide: 'USER_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('User', UserSchema),
    inject: ['MONGO_DATABASE_CONNECTION'],
  },
];
