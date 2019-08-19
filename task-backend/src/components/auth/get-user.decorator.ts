import { AuthEntity } from './../../entities/AuthEntity';
import { createParamDecorator } from "@nestjs/common";

export const GetUser = createParamDecorator((data, req): AuthEntity => {
    return req.user;
})