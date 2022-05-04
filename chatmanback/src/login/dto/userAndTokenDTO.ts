import { ApiProperty } from '@nestjs/swagger';
import { userEntity } from '../../core/entities/user.entity';

export class UserAndTokenDTO {
  @ApiProperty()
  loginUser: userEntity;
  @ApiProperty()
  token: string;
}
