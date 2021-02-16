import { TaskStatus } from './task-status.enum';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './task.entity';

import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Task)
export class TaskRepository extends Repository<Task> {
 async createTask(CreateTaskDto: CreateTaskDto): Promise<Task>{
    const { title, description } = CreateTaskDto;
    const task = new Task()
    task.title = title
    task.description = description
    task.status = TaskStatus.OPEN
    await task.save()
     
    return task;
 }
}
