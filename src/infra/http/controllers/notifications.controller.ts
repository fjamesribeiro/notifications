import { Body, Controller, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { CreateNotificationBodyDto } from '../dtos/create-notification-body';
import { SendNotification } from '../../../application/user-cases/send-notification';
import { ViewMoldelNotificationMapper } from '../mapper/view-model.notification.mapper';
import { CancelNotification } from 'src/application/user-cases/cancel-notification';
import { GetRecipientNotification } from 'src/application/user-cases/get-recipient-notifications';
import { ReadNotification } from 'src/application/user-cases/read-notification';
import { UnReadNotification } from 'src/application/user-cases/unread-notification';
import { CountNotification } from 'src/application/user-cases/count-recipient-notifications';
import { GetAllNotification } from 'src/application/user-cases/get-all-notifications';

@Controller('notifications')
export class NotificationController {
  constructor(
    private sendNotification: SendNotification,
    private cancelNotification: CancelNotification,
    private countNotification: CountNotification,
    private getRecipientNotification: GetRecipientNotification,
    private readNotification: ReadNotification,
    private unReadNotification: UnReadNotification,
    private getAllNotifications: GetAllNotification,
  ) { }

  @Patch(':id/cancel')
  async cancel(@Param('id') id: string) {
    await this.cancelNotification.execute({ notificationId: id })
  }

  @Get('count/from/:recipientId')
  async countFromRecipient(@Param('recipientId') recipientId: string) {
    const { count } = await this.countNotification.execute({ recipientId })
    return { count };
  }

  @Get()
  async getAll() {
    const { notifications } = await this.getAllNotifications.execute();
    return { notifications };
  }

  @Get('from/:recipientId')
  async getFromRecipient(@Param('recipientId') recipientId: string) {
    const { notifications } = await this.getRecipientNotification.execute({ recipientId });
    return { notifications: notifications.map(ViewMoldelNotificationMapper.toHttp) };
  }

  @Patch(':id/read')
  async read(@Param('id') id: string) {
    await this.readNotification.execute({ notificationId: id })
  }

  @Patch(':id/unread')
  async unread(@Param('id') id: string) {
    await this.unReadNotification.execute({ notificationId: id })
  }

  @Post()
  async addNotifications(@Body() body: CreateNotificationBodyDto) {
    const { category, content, recipientId } = body;
    const { notification } = await this.sendNotification.execute({
      category,
      content,
      recipientId,
    });

    return { notification: ViewMoldelNotificationMapper.toHttp(notification) };
  }

}
