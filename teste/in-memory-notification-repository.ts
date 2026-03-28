import { Notification } from "@/domain/notification/enterprise/entities/notification";
import { NotificationsRepository } from "@/domain/notification/application/repositories/notification-repository";

export class InMemoryNotificationRepository implements NotificationsRepository {
  public items: Notification[] = [];

  async create(notification: Notification) {
    this.items.push(notification);
  }
}
