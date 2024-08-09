import { CreateProductDTO } from './dto/create-product.dto';
import { ProductRepository } from './product.repository';
import { Body, Controller, Get, Post } from "@nestjs/common";

@Controller('/products')
export class ProductController {

    constructor(private productRepository: ProductRepository) {

    }

    // rotas
    @Post()
    async create(@Body() productData : CreateProductDTO) {
        this.productRepository.save(productData);
        return productData;
    }

    @Get()
    async productsList() {
        return this.productRepository.listAll();
    }

}