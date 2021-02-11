import { Task, TaskStatus } from './task.model';
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
    constructor ( private tasksService : TasksService){}
    @Get()
    getAllTask(): Task[] {
       return this.tasksService.getAllTasks()
    }

    @Get('/:id')
    getTaskById(@Param('id') id: string): Task{
        return this.tasksService.getTaskById(id)
    }

    @Post()
    createTask(
        @Body() CreateTaskDto: CreateTaskDto
       
      ): Task {
        return this.tasksService.createTask(CreateTaskDto)
        
    } 

    @Delete('/:id')
    deleteTask(@Param('id') id: string): void {
        this.tasksService.deleteTask(id)
    }

    @Patch(':id/status')
    updateTaskStatus(
        @Param('id') id: string,
        @Body('status') status: TaskStatus,
    ): Task {
        return this.tasksService.updateTaskStatus(id, status)
    }

}
 