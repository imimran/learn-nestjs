import { AuthDto } from './dto/auth.dto';
import { User } from './user.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
    async signup(authDto: AuthDto): Promise<void>{
        const { username, password} = authDto;

        const user = new User()
        user.username = username
        user.password = password
        await user.save()
    }
}