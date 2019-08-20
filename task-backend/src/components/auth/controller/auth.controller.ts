import { AuthEntity } from 'src/entities/AuthEntity.entity';
import { Body, Controller, Post, ValidationPipe, UseGuards, Get } from '@nestjs/common';
import { AuthDto } from './../dto/auth.dto';
import { AuthService } from './../services/auth.service';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from '../get-user.decorator';

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
        try {
            const result = await this.authService.loginUser(authDto);
            return { message: result.accessToken, success: true };
        } catch (error) {
            return { message: error, success: false };
        }
    }

    @Get('/userdata')
    @UseGuards(AuthGuard())
    test(@GetUser() user: AuthEntity) {
        try {
            return { message: user, success: true };
        } catch (error) {
            return { message: error, success: false };
        }
    }
}
