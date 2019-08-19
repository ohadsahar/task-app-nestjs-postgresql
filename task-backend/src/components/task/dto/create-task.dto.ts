import { IsNotEmpty, IsString } from 'class-validator';

export class TaskDTO {

    @IsNotEmpty()
    @IsString()
    public id: string;

    @IsNotEmpty()
    @IsString()
    public task: string;

    @IsNotEmpty()
    @IsString()
    public description: string;
}
