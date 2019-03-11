import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HcNotificationListComponent } from './notification-list/notification-list.component';
import { HcNotificationItemComponent } from './notification-item/notification-item.component';
import { HcNotificationService } from './notification.service';
import { ToasterModule } from '../toaster';
import { IconModule } from '../icon';
import { ButtonModule } from '../button';

@NgModule({
    imports: [
        ToasterModule,
        CommonModule,
        IconModule,
        ButtonModule
    ],
    declarations: [
        HcNotificationListComponent,
        HcNotificationItemComponent
    ],
    exports: [
        HcNotificationListComponent,
        HcNotificationItemComponent
    ],
    providers: [
        HcNotificationService
    ]
})
export class NotificationModule { }
