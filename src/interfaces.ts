import {TaskMode} from "@yelmer-samples/iptiq-task-manager";

export interface KillResponse {
    isDeleted: boolean;
}
export interface KillListResponse {
    deletedCount: number;
}
export interface SizeResponse {
    count: number;
}
export interface ModeResponse {
    mode: TaskMode;
}