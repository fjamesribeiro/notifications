import { Body, Controller, Get, Put } from '@nestjs/common';
import { AppService } from '../app.service';
import { PrismaService } from './prisma.service';
import { CreateNotificationBodyDto } from './create-notification-boby';
import { randomUUID } from 'crypto';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly prismaService: PrismaService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('notifications')
  getNotifications() {
    return this.prismaService.notification.findMany();
  }

  @Put("notifications")
  addNotifications(@Body() body: CreateNotificationBodyDto) {
    const { category, content, recipientId } = body;
    return this.prismaService.notification.create({
      data: {
        id: randomUUID(),
        category,
        recipientId,
        content
      }
    })
  }
}
