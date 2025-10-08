export interface Usertype {
    id: number;
    name: string;
    email: string;
    role: "user" | "admin";
    created_at?: string;
}
export interface Tasktype {
    id: number;
    title: string;
    description?: string;
    scheduled_for?: string;
    priority?: "Low" | "Moderate" | "Extreme";
    status?: "pending" | "in_progress" | "completed";
    user_id: number;
}
export interface Notificationtype {
    id: number;
    message: string;
    is_read: boolean;
    user_id: number;
    task_id?: number;
}
