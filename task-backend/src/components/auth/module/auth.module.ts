import { JwtStrategy } from '../jwt.strategy';
import { AuthEntity } from 'src/entities/AuthEntity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from '../controller/auth.controller';
import { AuthService } from '../services/auth.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
@Module({
    imports: [PassportModule.register({
        defaultStrategy: 'jwt'
    }), JwtModule.register({
        secret: 'SecretNeverKnown', signOptions: {
            expiresIn: 7200,
        },
    }), TypeOrmModule.forFeature([AuthEntity])],
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy],
    exports: [JwtStrategy, PassportModule],
})
export class AuthModule { }
