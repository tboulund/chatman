import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LoginService } from '../domain/services/login.service';
import { LoginDto } from './dto/login.dto';
import { RegistrationDto } from './dto/registration.dto';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post('/register')
  create(@Body() registerDTO: RegistrationDto) {
    return this.loginService.create(registerDTO);
  }

  @Post()
  login(@Body() loginDTO: LoginDto) {
    return this.loginService.login(loginDTO);
  }
}
