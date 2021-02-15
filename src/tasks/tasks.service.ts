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
 
  async getAllTask(): Promise<Task[]> {
    const tasks = await this.taskRepository.find()
  
    return tasks;
}

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


   async updateTaskStatus(id: number, status: TaskStatus): Promise<Task> {
    const task = await this.getTaskById(id)
    task.status= status;
    await task.save() 
    return task;
  }




}
