import { Module } from '@nestjs/common';
import { LoginService } from '../domain/services/login.service';
import { LoginController } from './login.controller';

@Module({
  controllers: [LoginController],
  providers: [LoginService],
})
export class LoginModule {}
