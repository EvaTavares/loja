import { ProductRepository } from './product.repository';
import { Body, Controller, Get, Post } from "@nestjs/common";

@Controller('/users')
export class ProductController {

    constructor(private productRepository: ProductRepository) {

    }

    // rotas
    @Post()
    async create(@Body() userData) {
        this.productRepository.save(userData);
        return userData;
    }

    @Get()
    async usersList() {
        return this.productRepository.listAll();
    }

}