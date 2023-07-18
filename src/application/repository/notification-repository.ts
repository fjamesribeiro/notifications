import { Notification } from "../entities/notification";

export abstract class NotificationRepository {
    abstract create(notification: Notification): Promise<void>;
    abstract findbyId(id: string): Promise<Notification | null>;
    abstract save(notification: Notification): Promise<void>;
    abstract countManyByRecipientId(idRecipient: string): Promise<number>;
    abstract findManyByRecipientId(idRecipient: string): Promise<Notification[]>;
    abstract getAllNotifinations(): Promise<Notification[]>;

}