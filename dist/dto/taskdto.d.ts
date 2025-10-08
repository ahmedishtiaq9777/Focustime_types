import { Tasktype } from "../entities/allentities";
export interface CreateTaskDTO {
    title: string;
    scheduled_for: string;
    priority: "Low" | "Moderate" | "Extreme";
    description?: string;
    status: string;
    image?: File | null;
}
export interface UpdateTaskDTO extends Partial<CreateTaskDTO> {
}
export interface PaginatedTasksResponse {
    tasks: Tasktype[];
    currentPage: number;
    totalPages: number;
    totalTasks: number;
}
