import { IsString, MaxLength, MinLength } from "class-validator";

export class AuthDto {
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    username: string;

    @IsString()
    @MinLength(5)
    @MaxLength(20)
    password: string;
}