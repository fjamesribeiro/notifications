import { randomUUID } from "crypto";
import { Replace } from "src/helpers/replace";


export interface NotificationProps {
  recipientId: string;
  content: string;
  category: string;
  readAt?: Date | null;
  canceledAt?: Date | null;
  createdAt?: Date;
}

export class Notification {

  private _id: string;

  private props: NotificationProps;

  constructor(props: Replace<NotificationProps, { createdAt?: Date }>, id?: string) {
    this._id = id ?? randomUUID();
    this.props = { ...props, createdAt: props.createdAt ?? new Date() }
  }

  public set recipientId(recipientId: string) {
    this.props.recipientId = recipientId;
  }

  public get id(): string {
    return this._id;
  }


  public get recipientId(): string {
    return this.props.recipientId;
  }

  public set content(content: string) {
    this.props.content = content;
  }

  public get content(): string {
    return this.props.content;
  }

  public set category(category: string) {
    this.props.category = category;
  }

  public get category(): string {
    return this.props.category;
  }

  public set createdAt(createdAt: Date) {
    this.props.createdAt = createdAt;
  }

  public get createdAt(): Date | null | undefined {
    return this.props.createdAt;
  }

  public get readAt(): Date | null | undefined {
    return this.props.readAt;
  }

  public cancel() {
    this.props.canceledAt = new Date();
  }

  public read() {
    this.props.readAt = new Date();
  }

  public unread() {
    this.props.readAt = null;
  }

  public get canceledAt(): Date | null | undefined {
    return this.props.canceledAt;
  }
}
