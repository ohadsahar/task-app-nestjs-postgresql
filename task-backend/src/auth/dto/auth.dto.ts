import { IsNotEmpty, MinLength, MaxLength, IsString } from "class-validator";

export class AuthDto {
    public id: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(4)
    @MaxLength(20)
    public username: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(4)
    @MaxLength(20)
    public password: string;
}
