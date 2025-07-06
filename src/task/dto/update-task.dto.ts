import { IsBoolean, IsNotEmpty, IsString, Length } from "class-validator";

export class UpdateTaskDto {
    @IsString({message: 'Название должно быть строкой'})
    @IsNotEmpty({message: 'Название не должно быть пустым'})
    @Length(2, 51, {message: 'В названии должно быть от 2 до 51 символов'})
    title: string;
    @IsBoolean()
    isCompleted: boolean;
}