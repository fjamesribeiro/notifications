import { Notification } from '../../../../application/entities/notification';
import { NotificationRepository } from '../../../../application/repository/notification-repository';
import { PrismaService } from '../prisma.service';
import { Injectable } from '@nestjs/common';
import { PrismaNotificationMapper } from '../mappers/prisma.notification.mapper';

@Injectable()
export class NotificationsPrismaRepository implements NotificationRepository {
  constructor(private prismaService: PrismaService) { }

  async getAllNotifinations(): Promise<Notification[]> {
    const notifications = await this.prismaService.notification.findMany();

    return notifications.map(PrismaNotificationMapper.toDomain);
  }

  async findManyByRecipientId(idRecipient: string): Promise<Notification[]> {
    const nofifications = await this.prismaService.notification.findMany({
      where: { recipientId: idRecipient }
    })

    return nofifications.map(notific => PrismaNotificationMapper.toDomain(notific))
  }

  async findbyId(id: string): Promise<Notification | null> {
    const nofification = await this.prismaService.notification.findUnique({
      where: { id }
    })

    if (!nofification) {
      return null
    }

    return PrismaNotificationMapper.toDomain(nofification);
  }

  async countManyByRecipientId(idRecipient: string): Promise<number> {
    const val = await this.prismaService.notification.count({
      where: { recipientId: idRecipient }
    })

    return val;
  }

  async save(notification: Notification): Promise<void> {
    const raw = PrismaNotificationMapper.toPrisma(notification);

    await this.prismaService.notification.update({
      where: { id: raw.id },
      data: raw
    })
  }


  async create(notification: Notification): Promise<void> {
    await this.prismaService.notification.create({
      data: PrismaNotificationMapper.toPrisma(notification)
    });
  }
}
