import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { TaskEntity } from 'src/entities/TaskEntity';
import { AuthEntity } from './../entities/AuthEntity';

export const TypeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'ppd53brx',
    database: 'tasks',
    entities: [TaskEntity, AuthEntity],
    synchronize: true,
    logging: true,
};
