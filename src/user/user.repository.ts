import { Injectable } from "@nestjs/common";

@Injectable()
export class userRepository {
    private users = [];

    async save(user) {
        this.users.push(user);
    }

    async listAll() {
        return this.users;
    }

   async findByEmail(email: string){
    const userPossible = this.users.find((user)=> {
        user.email === email;
    })

    return userPossible !== undefined;
    }
}