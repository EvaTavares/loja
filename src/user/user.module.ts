import { Module } from "@nestjs/common";
import { ProductController } from "./user.controller";
import { userRepository } from "./user.repository";

@Module({
    controllers: [ProductController],
    providers: [userRepository]
})
export class UserModule { }