import { Module } from "@nestjs/common";
import { ProductRepository } from './product.repository';
import { UserModule } from "src/user/user.module";
import { ProductController } from "./product.controller";

@Module({
    imports: [UserModule],
    controllers: [ProductController],
    providers: [ProductRepository]
})
export class ProductModule { }