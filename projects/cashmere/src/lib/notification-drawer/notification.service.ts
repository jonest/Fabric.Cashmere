import { Injectable } from '@angular/core';

import { IHcNotification } from './notification.interface';
import { IHcNotificationConfig } from './notification-config.interface';
import { HcNotificationPosition } from './notification-position.constants';
import { HcNotificationType } from './notification-type.constants';
import { HcNotification } from './notification.model';
import { HcToasterService, HcToastOptions } from '../toaster';

@Injectable()
export class HcNotificationService {
    private static StorageKey: string = 'HC.Notifications';

    constructor(private toastService: HcToasterService) {
        const storedNotifications: string | null = localStorage.getItem(HcNotificationService.StorageKey);
        if (storedNotifications) {
            this._notifications = JSON.parse(storedNotifications);
        }
    }

    private _notifications: Array<IHcNotification> = [];

    private _defaultTimeout: number = 5000;

    private _defaultClickDismiss: boolean = true;

    public success(config: IHcNotificationConfig): IHcNotification {
        return this.notify(config, HcNotificationType.Success);
    }

    public info(config: IHcNotificationConfig): IHcNotification {
        return this.notify(config, HcNotificationType.Info);
    }

    public alert(config: IHcNotificationConfig): IHcNotification {
        return this.notify(config, HcNotificationType.Alert);
    }

    public warning(config: IHcNotificationConfig): IHcNotification {
        return this.notify(config, HcNotificationType.Warning);
    }

    public get notifications(): Array<IHcNotification> {
        return this._notifications;
    }

    public dismiss(dismiss: IHcNotification): void {
        this._notifications = this._notifications.filter((notification: IHcNotification) => {
            return notification.id !== dismiss.id;
        });

        localStorage.setItem(HcNotificationService.StorageKey, JSON.stringify(this._notifications));
    }

    public dismissAll(): void {
        this._notifications = [];
        localStorage.setItem(HcNotificationService.StorageKey, JSON.stringify(this._notifications));
    }

    private notify(config: IHcNotificationConfig, type: HcNotificationType): IHcNotification {
        const options: HcToastOptions = this.convertConfig(config);
        options.type = <string>type;

        this.toastService.addToast(options);

        const notification: IHcNotification = new HcNotification(config, type);
        this._notifications.unshift(notification);

        localStorage.setItem(HcNotificationService.StorageKey, JSON.stringify(this._notifications));

        return notification;
    }

    private convertConfig(config: IHcNotificationConfig): HcToastOptions {
        const options: HcToastOptions = {
            header: config.header,
            body: config.body,
            position: <string>(config.position ? config.position : HcNotificationPosition.BottomRight),
            clickDismiss: config.clickDismiss ? config.clickDismiss : this._defaultClickDismiss,
            timeout: config.timeout ? config.timeout : this._defaultTimeout,
            toastClosed: config.onNotificationClosed
        };

        return options;
    }
}
