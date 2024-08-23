import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { userRepository } from "./user.repository";
import { EmailIsUnicValidator } from "./validation/email-is-unic.validator";

@Module({
    controllers: [UserController],
    providers: [userRepository, EmailIsUnicValidator]
})
export class UserModule { }