import { ArrayMinSize, IsArray, IsDateString, IsNotEmpty, IsNumber, IsPositive, IsString, MaxLength, Min, ValidateNested } from "class-validator";
import { CaracteristicaProdutoDTO } from "./caracteristica-produto.dto";
import { Type } from "class-transformer";
import { ImageProductDTO } from "./image-product.dto";

export class CreateProductDTO {
    @IsString()
    @IsNotEmpty({ message: "O nome do produto não pode ser vazio." })
    name: string;

    @IsString()
    @IsNotEmpty({ message: " A descrição do produto não pode se vazia." })
    @MaxLength(1000, { message: 'A decrição temo limite de 1000 caracteres.' })
    description: string;

    @IsNumber({ maxDecimalPlaces: 2, allowNaN: false, allowInfinity: false })
    @Min(1, { message: 'O valor precisa ser maior que zero' })
    value: number;

    @IsNumber()
    @Min(0, { message: 'Quantidade mínima inválida' })
    quantity: number;

    @ValidateNested()
    @IsArray()
    @ArrayMinSize(3)
    @Type(() => CaracteristicaProdutoDTO)
    caracteristicas: CaracteristicaProdutoDTO[];

    @ValidateNested()
    @IsArray()
    @ArrayMinSize(1)
    @Type(() => ImageProductDTO)
    images: ImageProductDTO[];

    @IsString()
    @IsNotEmpty({ message: 'A categoria não pode ser vazia.' })
    category: string;

    @IsDateString()
    dataCriacao: Date;

    @IsDateString()
    dataAtualizacao: Date;
}
