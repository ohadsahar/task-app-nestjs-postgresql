import { TaskService } from './../service/task.service';
import { TaskDTO } from './../dto/create-task.dto';
import { Controller, Get, Post, Body } from '@nestjs/common';

@Controller('task')
export class TaskController {

    constructor(private readonly taskService: TaskService) { }

    @Get()
    async get() {
        try {
            const resultAllTasks = await this.taskService.getTasks();
            return { message: resultAllTasks, success: true };
        } catch (error) {
            return { message: error, success: false };
        }
    }

    @Post()
    async create(@Body() taskDTO: TaskDTO) {
        try {
            const resultCreate = await this.taskService.createTask(taskDTO);
            return { message: resultCreate, success: true };
        } catch (error) {
            return { message: error, success: false };
        }
    }
}
