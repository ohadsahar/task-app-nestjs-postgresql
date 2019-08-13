import { TaskEntity } from 'src/entities/task/TaskEntity';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskModule } from './task/module/task.module';

@Module({
  imports: [TaskModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'ppd53brx',
    database: 'tasks',
    entities: [TaskEntity],
    synchronize: false,
    logging: true,
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
