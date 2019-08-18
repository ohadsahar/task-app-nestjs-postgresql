import { AuthEntity } from 'src/entities/AuthEntity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from '../controller/auth.controller';
import { AuthService } from '../services/auth.service';

@Module({
    imports: [TypeOrmModule.forFeature([AuthEntity])],
    controllers: [AuthController],
    providers: [AuthService],
})
export class AuthModule { }
