import { Injectable } from '@nestjs/common';
import { userRepository } from './../user.repository';
import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";

@Injectable()
@ValidatorConstraint({async: true})
export class EmailIsUnicValidator implements ValidatorConstraintInterface {

    constructor(private userRepository: userRepository){}

    async validate(value: any, validationArguments?: ValidationArguments): Promise<boolean>{
        const isUserWithEmail = await this.userRepository.findByEmail(value);
        
        return !isUserWithEmail;        
    }
}

// decorator personalizado. É uma função que retorna uma função
export const EmailIsUnic = (validationOptions: ValidationOptions) =>{
    return (object: Object, proprety: string) => {
        registerDecorator({
            target: object.constructor,
            propertyName: proprety,
            options: validationOptions,
            constraints: [],
            validator: EmailIsUnicValidator
        });
    }
}