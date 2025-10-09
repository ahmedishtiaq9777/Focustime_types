export interface NotificationAttributes {
    id: number;
    userId: number;
    taskId: number;
    message: string;
    isRead?: boolean;
    createdAt: Date;
    updatedAt: Date;
}
export interface CreateNotificationDTO {
    userId: number;
    taskId?: number;
    message: string;
    isRead?: boolean;
}
export interface UpdateNotificationDTO {
    isRead?: boolean;
    message?: string;
}
export interface NotificationResponse {
    id: number;
    userId: number;
    taskId?: number | null;
    message: string;
    isRead: boolean;
    createdAt: string;
}
export interface NotificationFilterQuery {
    userId?: number;
    isRead?: boolean;
    page?: number;
    limit?: number;
}
