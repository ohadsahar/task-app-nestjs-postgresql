import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { TaskController } from '../controller/task.controller';
import { TaskService } from '../service/task.service';
import { TaskEntity } from 'src/entities/task/TaskEntity';

@Module({
  imports: [TypeOrmModule.forFeature([TaskEntity])],
  controllers: [TaskController],
  providers: [TaskService],
})
export class TaskModule { }
