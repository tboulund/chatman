import { Module } from '@nestjs/common';
import { LoginService } from '../domain/services/login.service';
import { LoginController } from './login.controller';
import { MongoDbModule } from '../infrastructure/mongoDB/mongoDB.module';
import { userProvider } from '../infrastructure/mongoDB/userProvider';

@Module({
  controllers: [LoginController],
  imports: [MongoDbModule],
  providers: [LoginService, ...userProvider],
})
export class LoginModule {}
