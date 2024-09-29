import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { userRepository } from "./user.repository";
import { CreateUserDTO } from "./dto/create-user.dto";
import { UserEntity } from "./user.entity";
import { v4 as uuid } from "uuid";
import { UserListDto } from "./dto/user-list.dto";
import { UpdateUserDTO } from "./dto/update-user.dto";

@Controller('/users')
export class UserController {

    constructor(private userRepository: userRepository) {

    }

    // rotas
    @Post()
    async create(@Body() userData: CreateUserDTO) {
        // cria a entidade
        const userEntity = new UserEntity();

        // popula
        userEntity.email = userData.email;
        userEntity.password = userData.password;
        userEntity.name = userData.name;
        userEntity.id = uuid();

        // salva dos dados
        this.userRepository.save(userEntity);

        // resposta
        return {
            user: new UserListDto(userEntity.id, userEntity.name),
            message: "User created successfully."
        }
    }

    @Get()
    async usersList() {
        const savedUsers = await this.userRepository.listAll();
        const usersList = savedUsers.map(user => new UserListDto(
            user.id,
            user.name
        )
        );
        return usersList;
    }

    @Put('/:id')
    async userUpdate(@Param('id') id: string, @Body() newData: UpdateUserDTO) {
        const updatedUser = await this.userRepository.update(id, newData);

        return {
            user: updatedUser,
            message:"User updated successfully"
        }

    }

    
    @Delete('/:id')
    async userRemove(@Param('id') id: string) {
        const removedUser = await this.userRepository.remove(id);

        return {
            user: removedUser,
            message:"User removed successfully"
        }

    }

}