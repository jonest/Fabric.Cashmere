import { HcNotificationPosition } from './notification-position.constants';

export interface IHcNotificationConfig {
    /**
     * Display text for the header of the notification
     */
    header?: string;
    /**
     * Display text for the body of the notification
     */
    body?: string;
    /**
     * The positioning of the notification on the screen
     */
    position?: HcNotificationPosition;
    /**
     * Enable users to click to dismiss the notification
     */
    clickDismiss?: boolean;
    /**
     * The timeout (in milliseconds) for the notification before it disappears
     */
    timeout?: number;
    /**
     * An optional callback for when the notification is closed
     */
    onNotificationClosed?: Function;
}
