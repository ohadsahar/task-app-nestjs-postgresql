import { AuthEntity } from './../entities/AuthEntity';
import { TaskEntity } from './../entities/TaskEntity';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

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
