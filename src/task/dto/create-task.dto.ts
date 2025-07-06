import { IsArray, IsEnum, IsInt, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, IsUrl, IsUUID, Length, Matches, MinLength } from "class-validator";
import { StartWith } from "../decorators/start-with.decorator";

export enum TaskEnum {
    WORK = 'work',
    STUDY = 'study',
    HOME = 'home'
}

export class CreateTaskDto {
    @IsString()
    @IsNotEmpty()
    @StartWith('task:')
    @Length(2, 51)
    title: string;

    @IsString()
    @IsOptional()
    description: string;

    @IsInt({ message: "priority должен быть целым числом" })
    @IsPositive({ message: "priority должен быть > 0" })
    @IsOptional()
    priority: number;

    @IsArray()
    @IsEnum(TaskEnum, { each: true, message: "недопустимое значение тега" })
    @IsOptional()
    tags: Array<string>

    // @IsString()
    // @MinLength(6)
    // @Matches(/.*/)
    // @IsOptional()
    // password: string;

    // @IsUUID('4')
    // @IsOptional()
    // userId: string;

    // @IsUrl({
    //     protocols: ['http', 'https', 'ws', 'wss'],
    //     host_whitelist: ['google.com', 'yandex.ru']
    // })
    // @IsOptional()
    // websiteUrl: string;
}