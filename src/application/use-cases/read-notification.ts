import { Injectable } from '@nestjs/common';
import { NotificationRepository } from '../repository/notification-repository';
import { NotificationNotFound } from './errors/notification-not-found';

export interface ReadNotificationRequest {
  notificationId: string
}

type ReadNotificationResponse = void;

@Injectable()
export class ReadNotification {
  constructor(private notificationRepository: NotificationRepository) { }

  async execute(
    request: ReadNotificationRequest,
  ): Promise<ReadNotificationResponse> {

    const { notificationId } = request;

    const notification = await this.notificationRepository.findbyId(notificationId);

    if (!notification) {
      throw new NotificationNotFound();
    }

    notification.read();

    await this.notificationRepository.save(notification);

  }
}
