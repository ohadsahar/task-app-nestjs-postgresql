import { AuthEntity } from 'src/entities/AuthEntity';
import { TaskEntity } from 'src/entities/TaskEntity';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as config from 'config';

const dbConfig = config.get('db');
export const TypeOrmConfig: TypeOrmModuleOptions = {
    type: dbConfig.type,
    host: process.env.RDS_HOSTNAME || dbConfig.host,
    port: process.env.RDS_PORT || dbConfig.port,
    username: process.env.RDS_USERNAME || dbConfig.username,
    password: process.env.RDS_PASSWORD || dbConfig.password,
    database: process.env.DB_NAME || dbConfig.database,
    entities: [TaskEntity, AuthEntity],
    synchronize: process.env.TYPEORM_SYNC || dbConfig.synchronize,
    logging: true,
};
