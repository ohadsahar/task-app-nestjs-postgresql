import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { TaskDTO } from './../dto/create-task.dto';
import { TaskService } from './../service/task.service';

@Controller('task')

@UseGuards(AuthGuard())
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
    async create(@Body(ValidationPipe) taskDTO: TaskDTO) {
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
            await this.taskService.deleteTask(taskid);
            return { message: taskid, success: true };
        } catch (error) {
            return { message: error, success: false };
        }
    }
    @Put()
    async update(@Body(ValidationPipe) taskDto: TaskDTO) {
        try {
            const resultUpdate = await this.taskService.updateTask(taskDto.id, taskDto);
            return { message: resultUpdate, success: true };
        } catch (error) {
            return { message: error, success: false };
        }
    }
}
