import { IHcNotificationConfig } from './notification-config.interface';
import { HcNotificationType } from './notification-type.constants';

export interface IHcNotification {
    /**
     * Identifier for the notification. Used to identify specific notifications in the list.
     */
    readonly id: string;
    /**
     * Configuration for how to display the notification.
     */
    configuration: IHcNotificationConfig;
    /**
     * Timestamp for when the notification was created
     */
    readonly timeStamp: Date;
    /**
     * The type of notification to show
     */
    type: HcNotificationType;
}
