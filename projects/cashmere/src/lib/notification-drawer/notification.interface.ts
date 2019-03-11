import { IHcNotificationConfig } from './notification-config.interface';
import { HcNotificationType } from './notification-type.constants';

export interface IHcNotification {
    readonly id: string;
    configuration: IHcNotificationConfig;
    timeStamp: Date;
    type: HcNotificationType;
}
