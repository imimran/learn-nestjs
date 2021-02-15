import { AuthDto } from './dto/auth.dto';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {

    @Post('/signup')
    signUp(@Body() authDto: AuthDto){
        console.log(authDto);
        
    }
}
