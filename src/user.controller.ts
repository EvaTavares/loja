import { Body, Controller, Get, Post } from "@nestjs/common";
import { userRepository } from "./user.repository";

@Controller('/users')
export class UserController {
    private userRepository = new userRepository();
    // rotas
    @Post()
    async create(@Body() userData) {
        this.userRepository.save(userData);
        return userData;
    }

    @Get()
    async usersList() {
        return this.userRepository.listAll();
    }

}