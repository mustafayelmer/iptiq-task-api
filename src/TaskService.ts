import {TaskAddDto, TaskItem} from "@yelmer-samples/iptiq-task-manager/dist/task-manager/interfaces";
import {taskManager, TaskMode, TaskPriority} from "@yelmer-samples/iptiq-task-manager";
import {KillListResponse, KillResponse, SizeResponse} from "./interfaces";

// noinspection JSUnusedGlobalSymbols
export class TaskService {
    async addAsync(dto: TaskAddDto): Promise<TaskItem> {
        return taskManager.add(dto);
    }
    async listAsync(): Promise<Array<TaskItem>> {
        return taskManager.list();
    }
    async sizeAsync(): Promise<SizeResponse> {
        return {count: taskManager.size};
    }
    async killAsync(pid: string): Promise<KillResponse> {
        return {isDeleted: taskManager.kill(pid)};
    }
    async killGroupAsync(priority: TaskPriority): Promise<KillListResponse> {
        return {deletedCount: taskManager.killGroup(priority)};
    }
    async killAllAsync(): Promise<KillListResponse> {
        return {deletedCount: taskManager.killAll()};
    }
    async resetModeAsync(mode: TaskMode): Promise<KillListResponse> {
        return {deletedCount: taskManager.resetMode(mode)};
    }
    async resetCapacityAsync(capacity: number): Promise<KillListResponse> {
        return {deletedCount: taskManager.resetCapacity(capacity)};
    }
}