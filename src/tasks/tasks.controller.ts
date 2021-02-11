import { Task } from './task.entity';
// import { TaskStatusValidationPipe } from './pipes/task-status-validation.pipe';
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
    constructor ( private tasksService : TasksService){}
    // @Get()
    // getAllTask(): Task[] {
    //    return this.tasksService.getAllTasks()
    // }

    @Get('/:id')
    getTaskById(@Param('id', ParseIntPipe) id: number): Promise<Task>{
        return this.tasksService.getTaskById(id)
    }

    @Post()
    @UsePipes(ValidationPipe)
    createTask(
        @Body() CreateTaskDto: CreateTaskDto
       
      ): Promise<Task> {
        return this.tasksService.createTask(CreateTaskDto)
        
    } 

    // @Delete('/:id')
    // deleteTask(@Param('id') id: string): void {
    //     this.tasksService.deleteTask(id)
    // }

    // @Patch(':id/status')
    // updateTaskStatus(
    //     @Param('id') id: string,
    //     @Body('status', TaskStatusValidationPipe) status: TaskStatus,
    // ): Task {
    //     return this.tasksService.updateTaskStatus(id, status)
    // }

}
 