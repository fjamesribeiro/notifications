import { Injectable } from '@nestjs/common';
import { NotificationRepository } from '../repository/notification-repository';
import { NotificationNotFound } from './errors/notification-not-found';

export interface CancelNotificationRequest {
  notificationId: string
}

type CancelNotificationResponse = void;

@Injectable()
export class CancelNotification {
  constructor(private notificationRepository: NotificationRepository) { }

  async execute(
    request: CancelNotificationRequest,
  ): Promise<CancelNotificationResponse> {

    const { notificationId } = request;

    const notification = await this.notificationRepository.findbyId(notificationId);

    if (!notification) {
      throw new NotificationNotFound();
    }

    notification.cancel();

    await this.notificationRepository.save(notification);

  }
}
