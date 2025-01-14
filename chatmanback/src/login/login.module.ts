import { Module } from '@nestjs/common';
import { LoginService } from '../domain/services/login.service';
import { LoginController } from './login.controller';
import { MongoDbModule } from '../infrastructure/mongoDB/mongoDB.module';
import { userProvider } from '../infrastructure/mongoDB/userProvider';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
@Module({
  imports: [
    MongoDbModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [LoginController],
  providers: [LoginService, ...userProvider, LocalStrategy],
  exports: [LoginService],
})
export class LoginModule {}
