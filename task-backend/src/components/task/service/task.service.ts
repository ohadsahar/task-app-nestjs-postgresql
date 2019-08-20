import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthEntity } from 'src/entities/AuthEntity';
import { TaskEntity } from 'src/entities/TaskEntity';
import { Repository } from 'typeorm';
import { TaskDTO } from '../dto/create-task.dto';

@Injectable()
export class TaskService {

    constructor(@InjectRepository(TaskEntity)
    private taskRepository: Repository<TaskEntity>) { }

    async getTasks(user: AuthEntity) {
        const getTasksForUserQuery = this.taskRepository.createQueryBuilder('task');
        getTasksForUserQuery.where('task.userId = :userId', { userId: user.id });
        const tasks = await getTasksForUserQuery.getMany();
        return tasks;
    }
    async createTask(data: TaskDTO, user: AuthEntity) {
        const task = new TaskEntity();
        task.status = data.status;
        task.task = data.task;
        task.description = data.description;
        task.user = user;
        await this.taskRepository.save(task);
        delete task.user;
        return task;
    }
    async updateTask(id: string, data: TaskDTO) {
        await this.taskRepository.update({ id }, data);
        return await this.taskRepository.findOne({ id });
    }
    async deleteTask(id: string) {
        const resultDelete = await this.taskRepository.delete({ id });
        return resultDelete;
    }
}
