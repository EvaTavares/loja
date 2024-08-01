import { Body, Controller, Get, Post } from "@nestjs/common";
import { userRepository } from "./user.repository";
import { CreateUserDTO } from "./dto/create-user.dto";

@Controller('/users')
export class UserController {

    constructor(private userRepository: userRepository) {

    }

    // rotas
    @Post()
    async create(@Body() userData : CreateUserDTO) {
        this.userRepository.save(userData);
        return userData;
    }

    @Get()
    async usersList() {
        return this.userRepository.listAll();
    }

}