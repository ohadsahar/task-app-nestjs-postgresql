import { AuthEntity } from './AuthEntity';
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class TaskEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @CreateDateColumn()
    created: Date;

    @Column('text')
    task: string;

    @Column('text')
    status: string;

    @Column('text')
    description: string;

    @ManyToOne(type => AuthEntity, user => user.tasks, { eager: false })
    user: AuthEntity;

    @Column()
    userId: number;

}
