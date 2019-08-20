import { TypeOrmConfig } from './../config/typeorm.config';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './components/auth/module/auth.module';
import { TaskModule } from './components/task/module/task.module';


@Module({
  imports: [TaskModule, AuthModule, TypeOrmModule.forRoot(TypeOrmConfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
