import { AuthModule } from './auth/module/auth.module';
import { TypeOrmConfig } from './config/typeorm.config';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/module/task.module';

@Module({
  imports: [TaskModule, AuthModule, TypeOrmModule.forRoot(TypeOrmConfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
