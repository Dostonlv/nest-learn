import { plainToClass } from 'class-transformer';
import { SerializeUser, User } from '../../types';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users: User[] = [
        {
            username: 'john',
            password: 'changeme',
        },
        {
            username: 'chris',
            password: 'secret',
        },
        {
            username: 'alan',
            password: 'secret',
        },
        {
            username: 'alice',
            password: 'secret',
        },
        {
            username: 'jane',
            password: 'secret',
        },
    ];
    getUsers(){
        return this.users.map(user => new SerializeUser(user));
    }
    getUserByUsername(username: string){
        return this.users.find(user => user.username === username);
    }
}
