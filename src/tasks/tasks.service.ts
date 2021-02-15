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

  async deleteTask(id: number):Promise<void>{
    const result = await this.taskRepository.delete(id)
    if(result.affected === 0){
      throw new NotFoundException(`Task with Id "${id}" not found`)
    }
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
