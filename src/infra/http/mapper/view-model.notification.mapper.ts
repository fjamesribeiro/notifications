import { Notification } from "src/application/entities/notification"

export class ViewMoldelNotificationMapper {
    static toHttp(notification: Notification) {
        return {
            id: notification.id,
            content: notification.content,
            category: notification.category,
            recipientId: notification.recipientId
        }
    }
}   