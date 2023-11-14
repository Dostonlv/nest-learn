import { ClassSerializerInterceptor, Controller, Get, Inject, Param, UseInterceptors } from '@nestjs/common';
import { UsersService } from 'src/users/services/users/users.service';
import { HttpException } from '@nestjs/common/exceptions/http.exception';
import { SerializeUser } from 'src/users/types/index';

@Controller('users')
export class UsersController {
    constructor(
        @Inject('USER_SERVICE') private readonly userService:UsersService ) {}

        @UseInterceptors(ClassSerializerInterceptor)    
    @Get('')
    getUsers(){
        return this.userService.getUsers();
    }

    @UseInterceptors(ClassSerializerInterceptor)
    @Get(':username')
    getUserByUsername(@Param('username') username:string){
        const user= this.userService.getUserByUsername(username);
        if (user) return new SerializeUser(user);
        else throw new HttpException('User not found',404)
    }


}
