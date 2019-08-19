import { IsNotEmpty, IsString } from 'class-validator';

export class TaskDTO {

    public id: string;

    @IsNotEmpty()
    @IsString()
    public username: string;

    @IsNotEmpty()
    @IsString()
    public status: string;

    @IsNotEmpty()
    @IsString()
    public task: string;

    @IsNotEmpty()
    @IsString()
    public description: string;
}
