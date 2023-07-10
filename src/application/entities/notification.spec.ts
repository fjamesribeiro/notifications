import { Notification } from "./notification"

describe('Notification', () => {
    it('should be able to create a notification', () => {
        const notification = new Notification({
            content: 'conteudo',
            category: 'category',
            recipientId: 'recipientId',
            createdAt: new Date(),
            readAt: new Date()
        })

        expect(notification).toBeTruthy();
    })
})