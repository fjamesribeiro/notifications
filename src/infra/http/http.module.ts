import { Module } from '@nestjs/common';
import { NotificationController } from './controllers/notifications.controller';
import { SendNotification } from '../../application/user-cases/send-notification';
import { DatabaseModule } from '../database/database.module';
import { CancelNotification } from 'src/application/user-cases/cancel-notification';
import { CountNotification } from 'src/application/user-cases/count-recipient-notifications';
import { GetRecipientNotification } from 'src/application/user-cases/get-recipient-notifications';
import { ReadNotification } from 'src/application/user-cases/read-notification';
import { UnReadNotification } from 'src/application/user-cases/unread-notification';
import { GetAllNotification } from 'src/application/user-cases/get-all-notifications';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationController],
  providers: [SendNotification, CancelNotification, CountNotification, GetRecipientNotification, ReadNotification, UnReadNotification, GetAllNotification],
})
export class HttpModule {}
