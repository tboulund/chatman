import { IUserRepository } from '../interfaces/IUserRepository';

export class UserService {
  private userRepo: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepo = userRepository;
  }
}
