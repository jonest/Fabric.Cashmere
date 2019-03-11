import { Component, Input } from '@angular/core';

import { IHcNotification } from '../notification.interface';
import { HcNotificationService } from '../notification.service';
import { HcNotificationType } from '../notification-type.constants';

@Component({
    selector: 'hc-notification-item',
    templateUrl: './notification-item.component.html',
    styleUrls: ['./notification-item.component.scss']
})
export class HcNotificationItemComponent {

    @Input() public notification: IHcNotification;

    constructor(private notificationService: HcNotificationService) { }

    public dismissNotification(notification: IHcNotification): void {
        this.notificationService.dismiss(notification);
    }

    public get type(): HcNotificationType {
        return this.notification && this.notification.type ? this.notification.type : HcNotificationType.Info;
    }
}
