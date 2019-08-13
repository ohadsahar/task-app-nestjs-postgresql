import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskEntity } from 'src/entities/task/TaskEntity';
import { Repository } from 'typeorm';
import { TaskDTO } from '../dto/create-task.dto';

@Injectable()
export class TaskService {

    constructor(@InjectRepository(TaskEntity)
    private taskRepository: Repository<TaskEntity>) { }

    async getTasks() {
        return await this.taskRepository.find();
    }

    async createTask(data: TaskDTO) {
        await this.taskRepository.create(data);
        const result = await this.taskRepository.save(data);
        return result;
    }
    async deleteTask(id: string) {
        const resultDelete = await this.taskRepository.delete({ id });
        return resultDelete;
    }
}
