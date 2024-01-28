import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDTO } from 'src/users/dto/CreateUser.dto';
import { AuthGuard } from 'src/users/guards/auth/auth.guard';
import { ParseIntPipe as CustomPipe } from 'src/users/pipes/parse-int/parse-int.pipe';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
@UseGuards(AuthGuard)
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  getUsers() {
    return this.userService.fetchUsers();
  }

  @Post('create')
  @UsePipes(new ValidationPipe())
  createUser(@Body(CustomPipe) userData: CreateUserDTO) {
    console.log(typeof userData.age);
    return this.userService.createNewUser(userData);
  }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    const user = this.userService.fetchUserById(id);

    if (!user)
      throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
    return user;
  }
}
