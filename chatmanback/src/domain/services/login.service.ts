import { Inject, Injectable } from '@nestjs/common';
import { LoginDto } from '../../login/dto/login.dto';
import * as bcrypt from 'bcrypt';
import { User } from '../../user.entity';
import { Model } from 'mongoose';
import { RegistrationDto } from '../../login/dto/registration.dto';

@Injectable()
export class LoginService {
  constructor(@Inject('USER_MODEL') private readonly userModel: Model<User>) {}

  //this method registers a user
  async create(createUserDto: RegistrationDto) {
    const generatedSalt = this.generateSalt();
    const hashedPassword = this.hashPassword(
      createUserDto.password,
      generatedSalt,
    );
    return this.userModel.create({
      username: createUserDto.username,
      email: createUserDto.email,
      hashedPassword: hashedPassword,
      salt: generatedSalt,
    });
  }

  //generates a random string to be used as a salt. the salt will be 10 letters long
  generateSalt() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const charactersLength = characters.length;
    let result = 'A';
    for (let i = 0; i < 10; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  //this method hashes a password using a salt, it is used when creating an account and logging in
  hashPassword(password: string, salt: string) {
    return bcrypt.hash(password, salt);
  }

  //this compares 2 passwords, and returns a user if the password was correct
  async login(loginDTO: LoginDto) {
    const userFromDb = await this.userModel
      .findOne({
        username: loginDTO.username,
      })
      .exec();
    const loginPassword = this.hashPassword(loginDTO.password, userFromDb.salt);
    if (loginPassword == userFromDb.hashedPassword) {
      return userFromDb;
    } else {
      throw new Error('Wrong password');
    }
  }
}
