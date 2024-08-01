import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateUserDTO {
    @IsNotEmpty({message: "O nome não pode ser vazio."})
    name: string;

    @IsEmail(undefined, {message: 'O email precisa ser no formato exemplo@email.com'})
    email: string;

    @MinLength(6, {message: "A senha precisa ter pelo menos 6 caracteres."})
    password: string;
}