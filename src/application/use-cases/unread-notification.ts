import { Injectable } from '@nestjs/common';
import { NotificationRepository } from '../repository/notification-repository';
import { NotificationNotFound } from './errors/notification-not-found';

export interface UnReadNotificationRequest {
  notificationId: string
}

type UnReadNotificationResponse = void;

@Injectable()
export class UnReadNotification {
  constructor(private notificationRepository: NotificationRepository) { }

  async execute(
    request: UnReadNotificationRequest,
  ): Promise<UnReadNotificationResponse> {

    const { notificationId } = request;

    const notification = await this.notificationRepository.findbyId(notificationId);

    if (!notification) {
      throw new NotificationNotFound();
    }

    notification.unread();

    await this.notificationRepository.save(notification);

  }
}
