import { AuthEntity } from '../../entities/AuthEntity';
import { Injectable, ConflictException, InternalServerErrorException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { AuthDto } from '../dto/auth.dto';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
    constructor(@InjectRepository(AuthEntity)
    private authRepository: Repository<AuthEntity>) { }

    async createUser(authData: AuthDto) {
        try {
            const user = new AuthEntity();
            const salt = await bcrypt.genSalt();
            user.username = authData.username;
            user.salt = salt;
            user.password = await this.hashPassword(authData.password, salt);
            const result = await this.authRepository.save(user);
            return result;
        } catch (error) {
            if (error.code === '23505') {
                throw new ConflictException('username already exists');
            }
            throw new InternalServerErrorException();
        }
    }
    async hashPassword(password: string, salt: string) {
        return bcrypt.hash(password, salt);
    }
}
