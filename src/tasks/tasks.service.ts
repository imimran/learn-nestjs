import { Task } from './task.entity';
import { TaskRepository } from './task.repository';
import { CreateTaskDto } from './dto/create-task.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskStatus } from './task-status.enum';


@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TaskRepository)
    private taskRepository: TaskRepository
  ){}
  // private tasks: Task[] = [];

  // getAllTasks(): Task[] {
  //   return this.tasks;
  // }

  async getTaskById(id: number): Promise<Task> {
      const found =await this.taskRepository.findOne(id)
      if(!found){
        throw new NotFoundException(`Task with Id "${id}" not found`)
      }
      return found;
  }
  
  async createTask(CreateTaskDto: CreateTaskDto): Promise<Task> {
    return this.taskRepository.createTask(CreateTaskDto)
  }

  // deleteTask(id: string): void{
  //   const found = this.getTaskById(id)
  //   this.tasks = this.tasks.filter(task => task.id !== found.id)
  // }

  // updateTaskStatus(id: string, status: TaskStatus): Task {
  //   const task = this.getTaskById(id)
  //   task.status= status;
  //   return task;
  // }


}
