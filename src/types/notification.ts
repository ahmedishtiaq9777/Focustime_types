export interface NotificationAttributes {
  id: number;
  userId: number;
  taskId: number;
  message: string;
  isRead?: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// DTO used for creating notifications
export interface CreateNotificationDTO {
  userId: number;
  taskId?: number;
  message: string;
  isRead?: boolean; // optional, defaults to false in backend
}

// DTO used for updating notifications (e.g., marking as read)
export interface UpdateNotificationDTO {
  isRead?: boolean;
  message?: string;
}

// Shape of notification returned to frontend
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
