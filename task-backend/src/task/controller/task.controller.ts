import { TaskService } from './../service/task.service';
import { TaskDTO } from './../dto/create-task.dto';
import { Controller, Get, Post, Body, Delete, Param, Put } from '@nestjs/common';

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
    @Delete(':id')
    async delete(@Param('id') taskid: string) {
        try {
            const resultOfDelete = await this.taskService.deleteTask(taskid);
            return { message: taskid, success: true };
        } catch (error) {
            return { message: error, success: false };
        }
    }
    @Put()
    async update(@Body() taskDto: TaskDTO) {
        try {
            const resultUpdate = await this.taskService.updateTask(taskDto.id, taskDto);
            return { message: resultUpdate, success: true };
        } catch (error) {
            return { message: error, success: false };
        }
    }
}
