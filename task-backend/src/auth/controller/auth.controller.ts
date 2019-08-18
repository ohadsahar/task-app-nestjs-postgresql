import { AuthService } from './../services/auth.service';
import { AuthDto } from './../dto/auth.dto';
import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) { }
    @Post()
    async create(@Body(ValidationPipe) authDto: AuthDto) {
        try {
            const resultOfCreate = await this.authService.createUser(authDto);
            return { message: resultOfCreate, success: true };
        } catch (error) {
            return { message: error, success: false };
        }
    }
}
