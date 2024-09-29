import { IsNotEmpty, IsEmail, MinLength, IsOptional } from "class-validator";

export class UpdateUserDTO {
    @IsNotEmpty({message: "O nome não pode ser vazio."})
    @IsOptional()
    name?: string;

    @IsEmail(undefined, {message: 'O email precisa ser no formato exemplo@email.com'})
    @IsOptional()
    // @EmailIsUnic({message: "Já existe um usuário com este e-mail."})
    email?: string;

    @MinLength(6, {message: "A senha precisa ter pelo menos 6 caracteres."})
    @IsOptional()
    password?: string;
}