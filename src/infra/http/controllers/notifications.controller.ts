import { Body, Controller, Get, Put } from '@nestjs/common';
import { CreateNotificationBodyDto } from '../dtos/create-notification-body';
import { SendNotification } from '../../../application/user-cases/send-notification';

@Controller()
export class NotificationController {
  constructor(private sendNotification: SendNotification) {}

  @Put('notifications')
  async addNotifications(@Body() body: CreateNotificationBodyDto) {
    const { category, content, recipientId } = body;
    const { notification } = await this.sendNotification.execute({
      category,
      content,
      recipientId,
    });

    return { notification };
  }
}
