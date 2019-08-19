import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TaskEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @CreateDateColumn()
    created: Date;

    @Column('text')
    username: string;

    @Column('text')
    task: string;

    @Column('text')
    status: string;

    @Column('text')
    description: string;

}
