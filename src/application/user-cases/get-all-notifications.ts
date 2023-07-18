import { Injectable } from '@nestjs/common';
import { NotificationRepository } from '../repository/notification-repository';
import { Notification } from '../entities/notification';


interface GetAllNotificationResponse {
  notifications: Notification[]
}

@Injectable()
export class GetAllNotification {
  constructor(private notificationRepository: NotificationRepository) { }

  async execute(): Promise<GetAllNotificationResponse> {

    const notifications = await this.notificationRepository.getAllNotifinations();

    return {
      notifications
    }
  }
}
