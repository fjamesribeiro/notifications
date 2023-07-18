import { randomUUID } from "crypto"
import { Notification as RawNotification } from '@prisma/client'
import { Notification } from "src/application/entities/notification"

export class PrismaNotificationMapper {
    static toPrisma(notification: Notification) {
        return {
            id: notification.id,
            content: notification.content,
            category: notification.category,
            recipientId: notification.recipientId,
            canceledAt: notification.canceledAt,
            createdAt: notification.createdAt,
            readAt: notification.readAt,
        }
    }

    static toDomain(raw: RawNotification): Notification {
        return new Notification({
            content: raw.content,
            category: raw.category,
            recipientId: raw.recipientId,
            canceledAt: raw.canceledAt,
            createdAt: raw.createdAt,
            readAt: raw.readAt,
        }, raw.id,
        )
    }
}   