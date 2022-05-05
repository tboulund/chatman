export interface IUserRepository {
  create(username: string, email: string, password: string);
}
