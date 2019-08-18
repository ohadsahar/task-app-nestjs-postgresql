import { IsNotEmpty } from 'class-validator';

export class TaskDTO {
    @IsNotEmpty()
    public id: string;
    @IsNotEmpty()
    public task: string;
    @IsNotEmpty()
    public description: string;
}
