import { TaskDTO } from './../components/task/dto/create-task.dto';
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Unique, OneToMany } from 'typeorm';
import { TaskEntity } from './TaskEntity';

@Entity()
@Unique(['username'])
export class AuthEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @CreateDateColumn()
    created: Date;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    salt: string;

    @OneToMany(type => TaskEntity, task => task.user, { eager: true })
    tasks: TaskDTO[];
}
