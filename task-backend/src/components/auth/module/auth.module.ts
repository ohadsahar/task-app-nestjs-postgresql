import { JwtStrategy } from '../jwt.strategy';
import { AuthEntity } from 'src/entities/AuthEntity.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from '../controller/auth.controller';
import { AuthService } from '../services/auth.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import * as config from 'config';

const jwtConfig = config.get('jwt');
@Module({
    imports: [PassportModule.register({
        defaultStrategy: 'jwt'
    }), JwtModule.register({
        secret: process.env.JWT_SECRET || jwtConfig.secret, signOptions: {
            expiresIn: jwtConfig.expiresIn,
        },
    }), TypeOrmModule.forFeature([AuthEntity])],
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy],
    exports: [JwtStrategy, PassportModule],
})
export class AuthModule { }
