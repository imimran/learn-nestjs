import { Task } from './task.model';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor ( private tasksService : TasksService){}
    @Get()
    getAllTask(): Task[] {
       return this.tasksService.getAllTasks()
    }

    @Post()
    createTask(@Body()  body) {
        console.log(body);
        
    }
}
 