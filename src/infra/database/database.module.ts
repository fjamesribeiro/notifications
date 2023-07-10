import { Module } from '@nestjs/common';
import { NotificationRepository } from '../../application/repository/notification-repository';
import { NotificationsPrismaRepository } from './prisma/repository/prisma.notifications.repository';
import { PrismaService } from './prisma/prisma.service';

@Module({
  providers: [
    PrismaService,
    {
      provide: NotificationRepository,
      useClass: NotificationsPrismaRepository,
    },
  ],
  exports: [NotificationRepository],
})
export class DatabaseModule {}
