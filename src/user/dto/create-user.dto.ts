import { IsEmail, IsNotEmpty, MinLength } from "class-validator";
import { EmailIsUnic } from "../validation/email-is-unic.validator";


export class CreateUserDTO {
    @IsNotEmpty({message: "O nome não pode ser vazio."})
    name: string;

    @IsEmail(undefined, {message: 'O email precisa ser no formato exemplo@email.com'})
    @EmailIsUnic({message: "Já existe um usuário com este e-mail."})
    email: string;

    @MinLength(6, {message: "A senha precisa ter pelo menos 6 caracteres."})
    password: string;
}