import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

    async getUser() {
        return [
            {
                "id": 1,
                "name": "Alice Johnson",
                "email": "alice.johnson@example.com",
                "age": 28
            },
            {
                "id": 2,
                "name": "Bob Smith",
                "email": "bob.smith@example.com",
                "age": 34
            },
            {
                "id": 3,
                "name": "Charlie Brown",
                "email": "charlie.brown@example.com",
                "age": 45
            },
            {
                "id": 4,
                "name": "Diana Prince",
                "email": "diana.prince@example.com",
                "age": 30
            }
        ];
    }
}
