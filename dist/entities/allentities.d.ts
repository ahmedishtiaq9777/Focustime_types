export interface User {
    id: number;
    name: string;
    email: string;
    role: "user" | "admin";
    created_at?: string;
}
export interface Task {
    id: number;
    title: string;
    description?: string;
    scheduled_for?: string;
    priority?: "low" | "medium" | "high";
    status?: "pending" | "in_progress" | "completed";
    user_id: number;
}
export interface Notification {
    id: number;
    message: string;
    is_read: boolean;
    user_id: number;
    task_id?: number;
}
