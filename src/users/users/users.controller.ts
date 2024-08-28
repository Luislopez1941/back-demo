import { Controller } from '@nestjs/common';
import { Post, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(
       private readonly serviceUser: UsersService
    ) {

    }

    @Get('get')
    async createUser() {
        const user = await this.serviceUser.getUser();
        return user;
    }
}
