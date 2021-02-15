import { AuthDto } from './dto/auth.dto';
import { UserRepository } from './user.repository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository,
    ){}

    async signUp(authDto : AuthDto): Promise<void>{
        return this.userRepository.signup(authDto)
    }   
}
