import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { Task } from 'src/tasks/task.entity';

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService
    ){}

    @Post('/signup')
    signUp(@Body(ValidationPipe) authDto: AuthDto): Promise<void>{
        console.log(authDto);
        return this.authService.signUp(authDto)
        
    }
}
