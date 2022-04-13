import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '@app/user/dto/create-user.dto';

@Injectable()
export class UserService {
  async createUser(createUserDto: CreateUserDto) {
    return createUserDto;
  }
}
