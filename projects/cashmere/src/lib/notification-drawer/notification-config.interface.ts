import { HcNotificationPosition } from './notification-position.constants';

export interface IHcNotificationConfig {
    header?: string;
    body?: string;
    position?: HcNotificationPosition;
    clickDismiss?: boolean;
    timeout?: number;
    onNotificationClosed?: Function;
}
