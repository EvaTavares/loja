import { Injectable } from "@nestjs/common";
import { UserEntity } from "./user.entity";
import { UpdateUserDTO } from "./dto/update-user.dto";

@Injectable()
export class userRepository {
    private users: UserEntity[] = [];

    async save(user: UserEntity) {
        this.users.push(user);
    }

    async listAll() {
        return this.users;
    }

    async findByEmail(email: string) {
        const userPossible = this.users.filter((user) => user.email === email)

        return userPossible !== undefined;
    }

    async update(id: string, newData: Partial<UserEntity>) {
        // // procura se o usuário existe
        // const findUser = this.users.find(saveUser => saveUser.id === id);

        // //  se não existe, volta uma mensagem de erro
        // if (!findUser) {
        //     throw new Error("User does not exist.")
        // }
        const user = this.findById(id);

        Object.entries(newData).forEach(([key, value]) => {
            // previnir que o id não seja atualizado
            if (key === 'id') {
                return
            }

            // nome, email, senha - atribuição
            user[key] = value;
        })

        return user;
    }

    async remove(id: string){
        const user = this.findById(id);

        // removendo do array
        this.users = this.users.filter(
            (savedUser)=> savedUser.id !== id
        )
        
        return user;
  
    }

    private findById(id: string){
        // procura se o usuário existe
        const findUser = this.users.find(saveUser => saveUser.id === id);

        //  se não existe, volta uma mensagem de erro
        if (!findUser) {
            throw new Error("User does not exist.")
        }

        return findUser;

    }
}