import { IHcNotificationConfig } from './notification-config.interface';
import { HcNotificationType } from './notification-type.constants';
import { IHcNotification } from './notification.interface';
import { newGuid } from '../util';

export class HcNotification implements IHcNotification {
    public readonly id: string;
    public timeStamp: Date;

    constructor(public configuration: IHcNotificationConfig, public type: HcNotificationType) {
        this.id = newGuid();
        this.timeStamp = new Date();
    }
}
