import { ConflictException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcryptjs';
import { AuthEntity } from 'src/entities/AuthEntity';
import { Repository } from 'typeorm';
import * as authUtil from '../../../utils/auth.util';
import { AuthDto } from '../dto/auth.dto';
import { JwtPayload } from './../interface/jwt-payload.interface';

@Injectable()
export class AuthService {
    constructor(@InjectRepository(AuthEntity)
    private authRepository: Repository<AuthEntity>,
                private jwtService: JwtService) { }

    async signUpUser(authData: AuthDto) {
        try {
            const user = new AuthEntity();
            const salt = await bcrypt.genSalt();
            user.username = authData.username;
            user.salt = salt;
            user.password = await authUtil.hashPassword(authData.password, salt);
            const result = await this.authRepository.save(user);
            return result;
        } catch (error) {
            if (error.code === '23505') {
                throw new ConflictException('username already exists');
            }
            throw new InternalServerErrorException();
        }
    }
    async loginUser(authData: AuthDto): Promise<{ accessToken: string }> {
        const username = authData.username;
        const findUser = await this.authRepository.findOne({ username });
        if (findUser) {
            if (findUser && await authUtil.validatePassword(authData.password, findUser.salt, findUser.password)) {
                const payload: JwtPayload = { username };
                const accessToken = await this.jwtService.sign(payload);
                return { accessToken };
            }
        } else {
            throw new Error('User did not found');
        }
    }
}
