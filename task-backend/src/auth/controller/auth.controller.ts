import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthDto } from './../dto/auth.dto';
import { AuthService } from './../services/auth.service';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) { }
    @Post('/signup')
    async signUp(@Body(ValidationPipe) authDto: AuthDto) {
        try {
            const resultOfCreate = await this.authService.signUpUser(authDto);
            return { message: resultOfCreate, success: true };
        } catch (error) {
            return { message: error, success: false };
        }
    }
    @Post('/login')
    async login(@Body(ValidationPipe) authDto: AuthDto) {
        const result = await this.authService.loginUser(authDto);
        return { message: result.accessToken };
    }
}
