import { randomUUID } from 'crypto';
import { Notification } from '../../../../application/entities/notification';
import { NotificationRepository } from '../../../../application/repository/notification-repository';
import { PrismaService } from '../prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationsPrismaRepository implements NotificationRepository {
  constructor(private prismaService: PrismaService) {}

  async create(notification: Notification): Promise<void> {
    console.log(notification);
    await this.prismaService.notification.create({
      data: {
        id: randomUUID(),
        content: notification.content,
        category: notification.category,
        recipientId: notification.recipientId,
         createdAt: notification.createdAt,
        readAt: notification.readAt,
      },
    });
  }
}
