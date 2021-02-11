import { TaskStatus } from './../task-status.enum';
import { BadRequestException, PipeTransform } from '@nestjs/common';

export class TaskStatusValidationPipe implements PipeTransform {
  readonly allowStatusList = [
    TaskStatus.DONE,
    TaskStatus.OPEN,
    TaskStatus.IN_PROGRESS,
  ];
  transform(value: any) {
    console.log('value', value);
    value = value.toUpperCase();

    if(!this.isValidStatus(value)){
        throw new BadRequestException(`${value} is an invalid status`)
    }
    return value;
  }

  private isValidStatus(status: any) {
    const index = this.allowStatusList.indexOf(status);
    return index !== -1;
  }
}
