import { Component } from '@angular/core';

import { HcNotificationService } from '../notification.service';
import { IHcNotification } from '../notification.interface';

@Component({
    selector: 'hc-notification-list',
    templateUrl: './notification-list.component.html',
    styleUrls: ['./notification-list.component.scss']
})
export class HcNotificationListComponent {

    public noNotificationsText: string = 'No Notifications';
    public dismissAllText: string = 'Dismiss All';

    constructor(private notificationService: HcNotificationService) { }

    public get notificationList(): Array<IHcNotification> {
        return this.notificationService.notifications;
    }

    public get showList(): boolean {
        return this.notificationList.length > 0;
    }

    public dismissAll(): void {
        this.notificationService.dismissAll();
    }
}
