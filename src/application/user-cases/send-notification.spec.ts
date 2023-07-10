import { Notification } from '../entities/notification';
import { NotificationRepository } from '../repository/notification-repository';
import { SendNotification } from './send-notification';

const notRep = {
  async create(notification: Notification) {
    console.log(notification);
  },
};

describe('Send-Notification', () => {
  it('should be able to send a notification', async () => {
    const sendNotification = new SendNotification(notRep);

    const { notification } = await sendNotification.execute({
      content: 'conteudo',
      category: 'category',
      recipientId: 'recipientId',
    });

    expect(sendNotification).toBeTruthy();
  });
});
