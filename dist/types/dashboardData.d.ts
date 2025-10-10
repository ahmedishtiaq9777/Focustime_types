import { TaskAttributes } from "./task";
export interface DashboardSummary {
    total: number;
    completed: number;
    pending: number;
    highPriority: number;
}
export interface DashboardDataResponse {
    summary: DashboardSummary;
    upcomingTasks: TaskAttributes[];
    importantTasks: TaskAttributes[];
}
