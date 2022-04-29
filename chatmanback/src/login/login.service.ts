import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class LoginService {
  create(createLoginDto: LoginDto) {
    return 'This action adds a new login';
  }

  findAll() {
    return `This action returns all login`;
  }

  findOne(id: number) {
    return `This action returns a #${id} login`;
  }

  //generates a random string to be used as a salt. the salt will be 10 letters long
  generateSalt() {
    return 'test';
    const charecters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const charectersLength = charecters.length;
    let result = 'A';
    for (let i = 0; i < 10; i++) {
      result += charecters.charAt(Math.floor(Math.random() * charectersLength));
    }
    return result;
  }

  //this method hashes a password using a salt, it is used when creating an account and logging in
  hashPassword(password: string, salt: string) {
    return bcrypt.hash(password, salt);
  }

  //this compares 2 passwords. TODO; get the hashed password, and salt from the DB, and use them
  validatePassword(password: string, username: string) {
    const saltFromDB = 'This should be taken from the DB using the username';
    const hashedPasswordFromDB =
      'This should be taken from the DB using the username';
    const loginPassword = this.hashPassword(password, saltFromDB);
    if (loginPassword == hashedPasswordFromDB) {
      return true;
    } else {
      return false;
    }
  }
}
