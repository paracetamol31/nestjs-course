import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TaskService {
    private tasks = [
        {
            id: 1,
            title: 'Lern NestJS',
            isCompleted: false,
        },
        {
            id: 2,
            title: 'Lern NestJS 2',
            isCompleted: true,
        }
    ]

    findAll() {
        return this.tasks;
    }

    findById(id: number) {
        const task = this.tasks.find(task => task.id === id);
        if (!task) {
            throw new NotFoundException('Task not found')
        }

        return task;
    }

    create(dto: CreateTaskDto) {
        const newTask = {
            id: this.tasks.length + 1,
            title: dto.title,
            isCompleted: false,
            description: dto.description,
            priority: dto.priority,
            tags: dto.tags
        }

        this.tasks.push(newTask);
        return this.tasks;
    }

    update(id: number, dto: UpdateTaskDto) {
        const task = this.findById(id);

        task.title = dto.title;
        task.isCompleted = dto.isCompleted;

        return task;
    }

    patchUpdate(id: number, dto: Partial<UpdateTaskDto>) {
        const task = this.findById(id);

        Object.assign(task, dto);

        return task;
    }

    delete(id: number) {
        const task = this.findById(id);

        this.tasks = this.tasks.filter(task => id !== task.id);
        return task;
    }
}
