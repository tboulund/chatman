import { Document } from 'mongoose';
export class userEntity extends Document {
  readonly username: string;
  readonly email: string;
  readonly hashedPassword: string;
  readonly salt: string;
}
